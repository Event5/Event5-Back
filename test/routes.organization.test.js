const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  OrganizationServiceMock,
  organizationMock,
} = require('../utils/mocks/organizationMock');
const testServer = require('../utils/testServer');

describe('routes - organization', function () {
  const route = proxyquire('../routes/organization', {
    '../services/organization': OrganizationServiceMock,
  });

  const request = testServer(route);

  describe('GET /organization', function () {
    it('should respond with status 200', function (done) {
      request.get('/api/organization').expect(200, done);
    });

    it('should respond with an organization', function (done) {
      request.get('/api/organization').end((err, res) => {
        assert.deepEqual(res.body, {
          data: organizationMock,
          message: 'organization returned successfully',
        });

        done();
      });
    });
  });
});
