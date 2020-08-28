const eventDataMock = [
  {
    logo_url: 'http://images.com/logo_event',
    background_url: 'http://images.com/background_url',
    title: 'React the Library of the Future',
    description: 'React is a Library created at Facebook and 100% Open Source',
    event_image_url: 'http://images.com/event_image_url',
    event_id: 1,
  },
];

class EventDataServiceMock {
  constructor() {}

  getEventData() {
    return Promise.resolve(eventDataMock);
  }

  createEventData() {
    return Promise.resolve(eventDataMock[0]);
  }

  get() {
    return Promise.resolve(eventDataMock[0]);
  }

  create() {
    return Promise.resolve(eventDataMock[0]);
  }
}

module.exports = {
  EventDataServiceMock,
  eventDataMock,
};
