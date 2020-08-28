const assert = require('assert');
const proxyquire = require('proxyquire');
const config = require('../../config/config');

const {
  EventDataServiceMock,
  eventDataMock,
} = require('../../utils/mocks/eventDataMocks');
const testServer = require('../../utils/testServer');

const token = config.tests.token;

describe('- Event Data Route', function () {
  const route = proxyquire('../../routes/eventData', {
    '../services/eventData': EventDataServiceMock,
  });

  const request = testServer(route);

  // Test
  describe('POST /api/event', function () {
    it('Should create an event data', function () {
      return request
        .post('/api/event/new-event-data')
        .set('Authorization', 'bearer ' + token)
        .send(eventDataMock[0])
        .set('Accept', 'multipart/form-data')
        .expect(201)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: eventDataMock[0],
            message: 'event data created',
          });
        });
    });
  });
});
