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

  async updateEventData(eventData) {
    this.table = 'event-data-detail'
    const updatedEventData = await this.remoteStore.update(
      this.table,
      eventData
    );
    return updatedEventData;
  }
}

module.exports = EventDataService;
