const remoteStore = require('../lib/remoteStore');
const Email = require('./email');

class EventService {
  constructor() {
    this.remoteStore = new remoteStore();
    this.email = new Email();
    this.table = 'event';
  }

  async createEvent(event) {
    let createEvent = await this.remoteStore.create(this.table, event);
    if (typeof createEvent === 'object') {
      await this.email.scheduleEmail(createEvent);
    } else {
      createEvent = 'Event already Exists';
    }
    return createEvent;
  }

  async updateEvent(event) {
    this.table = 'event-detail';
    let updatedEvent = await this.remoteStore.update(this.table, event);
    if (typeof updatedEvent === 'object') {
      await this.email.rescheduleEmail(updatedEvent, true);
    } else {
      updatedEvent = 'Event already Exists';
    }
    return updatedEvent;
  }
}

module.exports = EventService;
