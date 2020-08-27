const userMock = [
  {
    id: 1,
    username: 'Luis',
    email: 'luis@gmail.com',
    password: '$2b$05$q9Fu3TgU6locFXjoAPrtt.ueAvfDpi0pHjxi12DKOgk0bf7SrOHMi',
    type_user: 'admin',
  },
];

class UserServiceMock {
  constructor() {}

  async getUser() {
    return Promise.resolve(userMock);
  }

  async createUser() {
    return Promise.resolve(userMock[0]);
  }
}

module.exports = {
  UserServiceMock,
  userMock,
};
