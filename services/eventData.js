const RemoteStore = require('../lib/remoteStore');

class EventDataService {
  constructor() {
    this.remoteStore = new RemoteStore();
    this.table = 'event-data';
  }

  async createEventData(eventData) {
    const createEventData = await this.remoteStore.create(
      this.table,
      eventData
    );
    return createEventData;
  }
}

module.exports = EventDataService;
