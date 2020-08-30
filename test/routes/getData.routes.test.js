const assert = require('assert');
const proxyquire = require('proxyquire');
const config = require('../../config/config');

const {
  GetDataServiceMock,
  getDataMock,
} = require('../../utils/mocks/getDataMock');
const testServer = require('../../utils/testServer');

const token = config.tests.token;

describe('- GetData Route', function () {
  const route = proxyquire('../../routes/getData', {
    '../services/getData': GetDataServiceMock,
  });

  const request = testServer(route);

  // Test
  describe('GET /api/getData', function () {
    it('Should get adminData', function () {
      return request
        .get('/api/data/admin')
        .set('Authorization', 'bearer ' + token)
        .set('Accept', 'application/json')
        .expect(200)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: getDataMock[0],
            message: 'admin obtained',
          });
        });
    });
    it('Should get organizerData', function () {
      return request
        .get('/api/data/organizer')
        .set('Authorization', 'bearer ' + token)
        .set('Accept', 'application/json')
        .expect(200)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: getDataMock[0],
            message: 'organizer obtained',
          });
        });
    });
    it('Should get Event with ID', function () {
      return request
        .get('/api/data/id_event')
        .set('Authorization', 'bearer ' + token)
        .set('Accept', 'application/json')
        .expect(200)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: getDataMock[0],
            message: 'id_event obtained',
          });
        });
    });
    it('Should get Event with URL', function () {
      return request
        .get('/api/data/url_event')
        .set('Authorization', 'bearer ' + token)
        .set('Accept', 'application/json')
        .expect(200)
        .then((response) => {
          assert.deepEqual(response.body, {
            data: getDataMock[0],
            message: 'url_event obtained',
          });
        });
    });
  });
});
