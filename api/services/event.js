const { eventMock } = require('../utils/mocks/eventMock');
const CrudMock = require('../utils/mocks/crud');

class EventService {
  constructor() {
    this.crudMock = new CrudMock();
  }

  async createEvent(event) {
    const createEvent = await this.crudMock.create(event, eventMock);
    // console.log(createEvent);
    return createEvent;
  }
}

module.exports = EventService;
