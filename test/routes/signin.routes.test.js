const assert = require('assert');
const proxyquire = require('proxyquire');

const { UserServiceMock } = require('../../utils/mocks/userMock');
const testServer = require('../../utils/testServer');

const user = {
  username: 'luis',
  email: 'luis@gmail.com',
  password: '123',
  type_user: 'admin',
};

describe('- Auth Route', function () {
  const route = proxyquire('../../routes/auth', {
    '../services/user': UserServiceMock,
  });

  const request = testServer(route);

  // Test routes auth
  describe('POST /api/auth', function () {
    it('/sign-up should create a user', function (done) {
      request
        .post('/api/auth/sign-up')
        .send(user)
        .set('Accept', 'application/json')
        .expect(201)
        .end((err, res) => {
          assert.deepEqual(res.body, {
            data: user,
            message: 'user created',
          });

          done();
        });
    });

    //   it('/sign-in if correct, should respond with a new JWT Token', function (done) {
    //     request
    //       .post('/api/auth/sign-up')
    //       .send({ user: user.email, password: user.password })
    //       .expect(200)
    //       .end((err, res) => {
    //         // assert.deepEqual(res.body, {
    //         //   data: userMock[0],
    //         //   message: 'user created',
    //         // });
    //         if (err) {
    //           done(err);
    //         }
    //         console.log('res=== ' + JSON.stringify(res));
    //         done();
    //       });
    //   });
  });

  // describe('POST /sign-up', function () {
  //   it('should respond with status 201', function (done) {
  //     request
  //       .post('/api/auth/sign-up')
  //       .send(userMock)
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /json/)
  //       .expect(201)
  //       .end(function (err, res) {
  //         if (err) return done(err);
  //         console.log(`RES Test= ${res}`);
  //         done();
  //       });
  //   });
  // });

  // it('should respond with an organization', function (done) {
  //   request.get('/api/organization').end((err, res) => {
  //     assert.deepEqual(res.body, {
  //       data: organizationMock,
  //       message: 'organization returned successfully',
  //     });

  //     done();
  //   });
  // });
});
