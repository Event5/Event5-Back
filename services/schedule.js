const { scheduleMock } = require('../utils/mocks/scheduleMock');
const CrudMock = require('../utils/mocks/crud');

class ScheduleService {
  constructor() {
    this.crudMock = new CrudMock();
  }

  async createSchedule(schedule) {
    const createdSchedule = await this.crudMock.create(schedule, scheduleMock);
    return createdSchedule;
  }
}

module.exports = ScheduleService;
