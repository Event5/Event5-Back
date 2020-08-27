// const assert = require('assert');
// const proxyquire = require('proxyquire');

// const { UserServiceMock, userMock } = require('../utils/mocks/userMock');
// const testServer = require('../utils/testServer');

// describe.only('routes - auth', function () {
//   const route = proxyquire('../routes/auth', {
//     '../services/user': UserServiceMock,
//   });

//   const request = testServer(route);

//   describe('POST /sign-up', function () {
//     it('should respond with status 201', function (done) {
//       request.post('/api/auth/sign-up').expect(201, done);
//     });

//     // it('should respond with an organization', function (done) {
//     //   request.get('/api/organization').end((err, res) => {
//     //     assert.deepEqual(res.body, {
//     //       data: organizationMock,
//     //       message: 'organization returned successfully',
//     //     });

//     //     done();
//     //   });
//     // });
//   });
// });
