const assert = require('assert');
const proxyquire = require('proxyquire');

const { UserServiceMock, userMock } = require('../../utils/mocks/userMock');

describe('User - services', function () {
  const UserService = proxyquire('../../services/user', {
    '../lib/remoteStore': UserServiceMock,
  });

  const userService = new UserService();

  describe('when user is called', async function () {
    it('should call get method', async function () {
      const result = await userService.getUser();
      const expected = userMock[0];
      assert.deepEqual(result, expected);
    });
    it('should call create method', async function () {
      const result = await userService.createUser(userMock[0]);
      const expected = userMock[0];
      assert.deepEqual(result, expected);
    });
  });
});
