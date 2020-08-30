const assert = require('assert');
const proxyquire = require('proxyquire');
const config = require('../../config/config');

const {
  OrganizerServiceMock,
  organizerMock,
} = require('../../utils/mocks/organizerMock');
const testServer = require('../../utils/testServer');

const token = config.tests.token;

describe('- Organizer Route', function () {
  const route = proxyquire('../../routes/organizer', {
    '../services/organizer': OrganizerServiceMock,
  });

  const request = testServer(route);

  // Test
  describe('POST /api/organizer', function () {
    it('Should create an organizer', function () {
      return request
        .post('/api/event/organizer')
        .set('Authorization', 'bearer ' + token)
        .send(organizerMock[0])
        .set('Accept', 'application/json')
        .expect(201)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: organizerMock[0],
            message: 'organizer added',
          });
        });
    });
  });
});
