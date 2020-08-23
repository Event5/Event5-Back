const bcrypt = require('bcrypt');
const RemoteStore = require('../lib/remoteStore');

class UsersService {
  constructor() {
    this.remoteStore = new RemoteStore('https://event5api.herokuapp.com');
    this.table = 'user';
  }

  // Get the user that matches the passed email.
  async getUser(email) {
    const emailReq = `?email=${email}`;
    const user = await this.remoteStore.get(this.table, emailReq);
    return user;
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

module.exports = UsersService;
