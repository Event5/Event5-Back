// const { registryMock } = require('../utils/mocks/registryMock');
// const CrudMock = require('../utils/mocks/crud');
const RemoteStore = require('../lib/remoteStore');

class RegistryService {
  constructor() {
    this.remoteStore = new RemoteStore();
    this.table = 'registry';
  }

  async createRegistry(registry) {
    const createdRegistry = await this.remoteStore.create(this.table, registry);
    return createdRegistry;
  }
}

module.exports = RegistryService;
