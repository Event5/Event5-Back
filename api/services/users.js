const bcrypt = require('bcrypt');
const usersMocks = require('../utils/mocks/usersMocks');

class UsersService {
  constructor() {}

  // Get that matches the email passed.
  async getUser(email) {
    const user = await usersMocks.getUser(email);
    return user;
  }

  // Create new User.
  async createUser(user) {
    const { username, email, password, type } = user;

    // hash the password to be secure
    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = await usersMocks.createUser({
      username,
      email,
      password: hashedPassword,
      type,
    });

    return createUser;
  }
}

module.exports = UsersService;
