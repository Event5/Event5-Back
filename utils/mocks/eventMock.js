const eventMock = [
  {
    event_name: 'React',
    url: 'react-event',
    event_start_date: 'Sun Feb 28 2010 05:30:00 GMT+0530 (IST)',
    template: 1,
    user_id: 1,
    organization_id: 1,
  },
];

class EventServiceMock {
  constructor() {}

  getEvent() {
    return Promise.resolve(eventMock);
  }

  createEvent() {
    return Promise.resolve(eventMock[0]);
  }

  get() {
    return Promise.resolve(eventMock[0]);
  }

  create() {
    return Promise.resolve(eventMock[0]);
  }
}

module.exports = {
  EventServiceMock,
  eventMock,
};
