const assert = require('assert');
const proxyquire = require('proxyquire');
const config = require('../../config/config');

const {
  AssociateServiceMock,
  associateMock,
} = require('../../utils/mocks/associateMock');
const testServer = require('../../utils/testServer');

const token = config.tests.token;

describe('- Associate Route', function () {
  const route = proxyquire('../../routes/associate', {
    '../services/associate': AssociateServiceMock,
  });

  const request = testServer(route);

  // Test
  describe('POST /api/associate', function () {
    it('Should create an associate', function () {
      return request
        .post('/api/event/associate')
        .set('Authorization', 'bearer ' + token)
        .send(associateMock[0])
        .set('Accept', 'application/json')
        .expect(201)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: associateMock[0],
            message: 'associate created',
          });
        });
    });
  });
});
