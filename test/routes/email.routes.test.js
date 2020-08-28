const assert = require('assert');
const proxyquire = require('proxyquire');
const config = require('../../config/config');

const { EmailServiceMock, emailMock } = require('../../utils/mocks/emailMock');
const testServer = require('../../utils/testServer');

const token = config.tests.token;

describe('- Email Route', function () {
  const route = proxyquire('../../routes/email', {
    '../services/email': EmailServiceMock,
  });

  const request = testServer(route);

  // Test
  describe('POST /api/email', function () {
    it('Should create an email', function () {
      return request
        .post('/api/email')
        .set('Authorization', 'bearer ' + token)
        .send(emailMock[0])
        .set('Accept', 'application/json')
        .expect(201)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: emailMock[0],
            message: 'email send',
          });
        });
    });
  });
});
