const userMock = [
  {
    username: 'Juan',
    email: 'juan@gmail.com',
    password: '123',
    type_user: 'admin',
  },
];

class UserServiceMock {
  constructor() {}

  async getUser(email) {
    const user = userMock.find((user) => user.email === email);
    if (!user) {
      return { detail: 'user not found' };
    }
    return user;
  }

  async createUser(data) {
    // const newData = Object.assign({ id: userMock.length + 1 }, data);

    userMock.push(data);
    const speakerCreated = userMock.find((val) => val.email === data.email);
    return speakerCreated;
  }
}

module.exports = {
  UserServiceMock,
  userMock,
};
