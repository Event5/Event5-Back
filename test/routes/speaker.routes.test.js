const assert = require('assert');
const proxyquire = require('proxyquire');
const config = require('../../config/config');

const {
  SpeakerServiceMock,
  speakerMock,
} = require('../../utils/mocks/speakerMock');
const testServer = require('../../utils/testServer');

const token = config.tests.token;

describe('- Speaker Route', function () {
  const route = proxyquire('../../routes/speaker', {
    '../services/speaker': SpeakerServiceMock,
  });

  const request = testServer(route);

  // Test
  describe('POST /api/speaker', function () {
    it('Should create an speaker', function () {
      return request
        .post('/api/event/speaker')
        .set('Authorization', 'bearer ' + token)
        .send(speakerMock[0])
        .set('Accept', 'application/json')
        .expect(201)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: speakerMock[0],
            message: 'speaker created',
          });
        });
    });
    it('Should update a speaker', function () {
      return request
        .put('/api/event/speaker')
        .set('Authorization', 'bearer ' + token)
        .send(speakerMock[0])
        .set('Accept', 'application/json')
        .expect(200)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: speakerMock[0],
            message: 'speaker updated successfully',
          });
        });
    });
  });
});
