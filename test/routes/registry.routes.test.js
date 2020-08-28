const assert = require('assert');
const proxyquire = require('proxyquire');
const config = require('../../config/config');

const {
  RegistryServiceMock,
  registryMock,
} = require('../../utils/mocks/registryMock');
const testServer = require('../../utils/testServer');

const token = config.tests.token;

describe('- Registry Route', function () {
  const route = proxyquire('../../routes/registry', {
    '../services/registry': RegistryServiceMock,
  });

  const request = testServer(route);

  // Test
  describe('POST /api/registry', function () {
    it('Should create an registry', function () {
      return request
        .post('/api/event/registry')
        .set('Authorization', 'bearer ' + token)
        .send(registryMock[0])
        .set('Accept', 'application/json')
        .expect(201)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: registryMock[0],
            message: 'registry created',
          });
        });
    });
  });
});
