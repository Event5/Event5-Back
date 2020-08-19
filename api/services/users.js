const bcrypt = require('bcrypt');
const usersMocks = require('../utils/mocks/usersMocks');

class UsersService {
  constructor() {
    // this.usersData = usersMocks;
  }

  async getUser(email) {
    const user = await usersMocks.getUser(email);
    return user;
  }

  async createUser({ user }) {
    const { username, email, password, type } = user;
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
