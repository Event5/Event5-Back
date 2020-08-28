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

  getUser(email) {
    const user = userMock.find((user) => user.email === email);
    if (!user) {
      return { detail: 'user not found' };
    }
    return user;
  }

  createUser(data) {
    // const newData = Object.assign({ id: userMock.length + 1 }, data);

    userMock.push(data);
    const speakerCreated = userMock.find((val) => val.email === data.email);
    return speakerCreated;
  }

  get() {
    return Promise.resolve(userMock[0]);
  }

  create() {
    return Promise.resolve(userMock[0]);
  }
}

module.exports = {
  UserServiceMock,
  userMock,
};
