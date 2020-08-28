const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  RegistryServiceMock,
  registryMock,
} = require('../../utils/mocks/registryMock');

describe('Registry - services', function () {
  const RegistryService = proxyquire('../../services/registry', {
    '../lib/remoteStore': RegistryServiceMock,
  });

  const registryService = new RegistryService();

  describe('when registry is called', async function () {
    it('should call create method', async function () {
      const result = await registryService.createRegistry(registryMock[0]);
      const expected = registryMock[0];
      assert.deepEqual(result, expected);
    });
  });
});
