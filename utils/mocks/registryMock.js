const registryMock = [
  {
    email: 'ramon@gmail.com',
    event_id: 1,
  },
];

class RegistryServiceMock {
  constructor() {}

  async getRegistry() {
    return Promise.resolve(registryMock);
  }

  async createRegistry() {
    return Promise.resolve(registryMock[0]);
  }
}

module.exports = {
  RegistryServiceMock,
  registryMock,
};
