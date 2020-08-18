const data = require('../utils/mocks/usersMocks');
const bcrypt = require('bcrypt');
const usersMocks = require('../utils/mocks/usersMocks');

class UsersService {
  constructor() {
    this.usersData = usersMocks;
  }

  async getUsers({ id }) {
    const user = await this.usersData.getUser(id);
  }

  async createUser({ user }) {
    const { username, email, password, type } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = await this.usersData.createUser({
      username,
      email,
      password: hashedPassword,
      type,
    });

    return createUser;
  }
}

module.exports = UsersService;
