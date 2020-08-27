const bcrypt = require('bcrypt');
const RemoteStore = require('../lib/remoteStore');

class UserService {
  constructor() {
    this.remoteStore = new RemoteStore();
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
      user.user_status = 'active';
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

      if (createdUser.password) delete createdUser.password;
      if (createdUser.date_create) delete createdUser.date_create;
      if (createdUser.user_status) delete createdUser.user_status;

      return createdUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserService;
