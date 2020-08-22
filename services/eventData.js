const { eventDataMock } = require('../utils/mocks/eventDataMocks');
const CrudMock = require('../utils/mocks/crud');

class EventDataService {
  constructor() {
    this.crudMock = new CrudMock();
  }

  async createEventData(eventData) {
    const createEventData = await this.crudMock.create(
      eventData,
      eventDataMock
    );
    return createEventData;
  }
}

module.exports = EventDataService;
