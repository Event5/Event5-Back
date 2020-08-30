const registryMock = [
  {
    email: 'ramon@gmail.com',
    event_id: [1],
  },
];

class RegistryServiceMock {
  constructor() {}

  getRegistry() {
    return Promise.resolve(registryMock);
  }

  createRegistry() {
    return Promise.resolve(registryMock[0]);
  }

  get() {
    return Promise.resolve(registryMock[0]);
  }

  create() {
    return Promise.resolve(registryMock[0]);
  }
}

module.exports = {
  RegistryServiceMock,
  registryMock,
};
