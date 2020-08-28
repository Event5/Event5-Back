const associateMock = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    logo_url: 'http://images.com/facebook',
    relevance: true,
    event_id: 1,
  },
];

class AssociateServiceMock {
  constructor() {}

  async getAssociate() {
    return Promise.resolve(associateMock);
  }

  async createAssociate() {
    return Promise.resolve(associateMock[0]);
  }
}

module.exports = {
  AssociateServiceMock,
  associateMock,
};
