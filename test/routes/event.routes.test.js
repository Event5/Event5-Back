const assert = require('assert');
const proxyquire = require('proxyquire');
const config = require('../../config/config');

const { EventServiceMock, eventMock } = require('../../utils/mocks/eventMock');
const testServer = require('../../utils/testServer');

const token = config.tests.token;

describe('- Event Route', function () {
  const route = proxyquire('../../routes/event', {
    '../services/event': EventServiceMock,
  });

  const request = testServer(route);

  // Test
  describe('POST /api/event', function () {
    it('Should create an event', async function () {
      return await request
        .post('/api/event/new-event')
        .set('Authorization', 'bearer ' + token)
        .send(eventMock[0])
        .set('Accept', 'application/json')
        .expect(201)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: eventMock[0],
            message: 'event created',
          });
        });
    });
  });
});
