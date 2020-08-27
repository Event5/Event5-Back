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
}

module.exports = EventService;
