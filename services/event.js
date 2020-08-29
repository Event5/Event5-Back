const remoteStore = require('../lib/remoteStore');

class EventService {
  constructor() {
    this.remoteStore = new remoteStore();
    this.table = 'event';
  }

  async createEvent(event) {
    const createEvent = await this.remoteStore.create(this.table, event);
    return createEvent;
  }

  async updateEvent(event) {
    this.table = 'event-detail';
    const updatedEvent = await this.remoteStore.update(this.table, event);
    return updatedEvent;
  }
}

module.exports = EventService;
