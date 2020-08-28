const scheduleMock = [
  {
    title: 'Redux',
    description: 'Session with a professional, is going to teach us Redux',
    date_time: 'Sun Feb 28 2010 05:30:00 GMT+0530 (IST)',
    event_id: 1,
  },
];

class ScheduleServiceMock {
  constructor() {}

  async getSchedule() {
    return Promise.resolve(scheduleMock);
  }

  async createSchedule() {
    return Promise.resolve(scheduleMock[0]);
  }
}

module.exports = {
  ScheduleServiceMock,
  scheduleMock,
};
