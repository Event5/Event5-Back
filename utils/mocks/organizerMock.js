const organizerMock = [
  {
    email: 'React Mexico',
    event_id: 1,
  },
];

class OrganizerServiceMock {
  constructor() {}

  async getOrganizer() {
    return Promise.resolve(organizerMock);
  }

  async createOrganizer() {
    return Promise.resolve(organizerMock[0]);
  }
}

module.exports = {
  OrganizerServiceMock,
  organizerMock,
};
