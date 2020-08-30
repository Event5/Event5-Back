const assert = require('assert');
const proxyquire = require('proxyquire');
const config = require('../../config/config');

const {
  ScheduleServiceMock,
  scheduleMock,
} = require('../../utils/mocks/scheduleMock');
const testServer = require('../../utils/testServer');

const token = config.tests.token;

describe('- Schedule Route', function () {
  const route = proxyquire('../../routes/schedule', {
    '../services/schedule': ScheduleServiceMock,
  });

  const request = testServer(route);

  // Test
  describe('POST /api/schedule', function () {
    it('Should create an schedule', function () {
      return request
        .post('/api/event/schedule')
        .set('Authorization', 'bearer ' + token)
        .send(scheduleMock[0])
        .set('Accept', 'application/json')
        .expect(201)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: scheduleMock[0],
            message: 'schedule created',
          });
        });
    });
    it('Should update an schedule', function () {
      return request
        .put('/api/event/schedule')
        .set('Authorization', 'bearer ' + token)
        .send(scheduleMock[0])
        .set('Accept', 'application/json')
        .expect(200)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: scheduleMock[0],
            message: 'schedule updated successfully',
          });
        });
    });
  });
});
