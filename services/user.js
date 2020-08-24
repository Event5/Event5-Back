const bcrypt = require('bcrypt');
const RemoteStore = require('../lib/remoteStore');
const config = require('../config/config');

class UserService {
  constructor() {
    this.remoteStore = new RemoteStore(config.url_data);
    this.table = 'user';
  }

  // Get the user that matches the passed email.
  async getUser(email) {
    try {
      const user = await this.remoteStore.get(this.table, email);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  // Create new User.
  async createUser(user) {
    try {
      const { username, email, password, type_user, user_status } = user;

      // hash the password to be secure
      const hashedPassword = await bcrypt.hash(password, 10);

      // Communicate with the Data service to store the user
      const createdUser = await this.remoteStore.create(this.table, {
        username,
        email,
        password: hashedPassword,
        type_user,
        user_status,
      });

      return createdUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserService;
