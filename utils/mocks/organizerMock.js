const organizerMock = [
  {
    email: 'moye@gmail.com',
    event_id: 1,
  },
];

class OrganizerServiceMock {
  constructor() {}

  getOrganizer() {
    return Promise.resolve(organizerMock);
  }

  createOrganizer() {
    return Promise.resolve(organizerMock[0]);
  }

  get() {
    return Promise.resolve(organizerMock[0]);
  }

  create() {
    return Promise.resolve(organizerMock[0]);
  }
}

module.exports = {
  OrganizerServiceMock,
  organizerMock,
};
