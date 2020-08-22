const bcrypt = require('bcrypt');
const { userMock } = require('../utils/mocks/userMock');
const CrudMock = require('../utils/mocks/crud');

class UsersService {
  constructor() {
    this.crudMock = new CrudMock();
  }

  // Get that matches the email passed.
  async getUser(email) {
    const user = await this.crudMock.getUser(email, userMock);
    return user;
  }

  // Create new User.
  async createUser(user) {
    try {
      const { username, email, password, type } = user;

      // hash the password to be secure
      const hashedPassword = await bcrypt.hash(password, 10);

      const createdUser = await this.crudMock.create(
        {
          username,
          email,
          password: hashedPassword,
          type,
        },
        userMock
      );

      return createdUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UsersService;
