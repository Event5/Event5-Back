const { registryMock } = require('../utils/mocks/registryMock');
const CrudMock = require('../utils/mocks/crud');

class RegistryService {
  constructor() {
    this.crudMock = new CrudMock();
  }

  async createRegistry(registry) {
    const createdRegistry = await this.crudMock.create(registry, registryMock);
    return createdRegistry;
  }
}

module.exports = RegistryService;
