const remoteStore = require('../lib/remoteStore');

class EventService {
  constructor() {
    this.remoteStore = new remoteStore();
    this.table = 'event';
  }

  // addValues(event) {
  //   if (typeof event.conferences === 'undefined') event.conferences = 0;
  //   if (typeof event.associates === 'undefined') event.associates = 0;
  //   if (typeof event.public === 'undefined') event.public = 0;
  //   return event;
  // }

  async createEvent(event) {
    // const eventComplete = this.addValues(event);
    const createEvent = await this.remoteStore.create(this.table, event);
    return createEvent;
  }

  async updateEvent(event) {
    // const eventComplete = this.addValues(event);
    this.table = 'event-detail';
    const updatedEvent = await this.remoteStore.update(this.table, event);
    return updatedEvent;
  }
}

module.exports = EventService;
