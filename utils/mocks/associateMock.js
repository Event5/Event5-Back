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

  getAssociate() {
    return Promise.resolve(associateMock);
  }

  createAssociate() {
    return Promise.resolve(associateMock[0]);
  }

  get() {
    return Promise.resolve(associateMock[0]);
  }

  create() {
    return Promise.resolve(associateMock[0]);
  }
}

module.exports = {
  AssociateServiceMock,
  associateMock,
};
