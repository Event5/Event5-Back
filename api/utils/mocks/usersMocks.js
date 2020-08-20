const usersMock = [
  {
    id: 1,
    username: 'Jose',
    email: 'jose@gmail.com',
    password: 'jose123',
    type: 'admin',
  },
  {
    id: 1,
    username: 'Luis',
    email: 'luis@gmail.com',
    password: '$2b$05$q9Fu3TgU6locFXjoAPrtt.ueAvfDpi0pHjxi12DKOgk0bf7SrOHMi',
    type: 'admin',
  },
  {
    id: 3,
    username: 'Pancho',
    email: 'pancho@gmail.com',
    password: 'pancho123',
    type: 'organizer',
  },
];

function getUser(email) {
  const user = usersMock.find((user) => user.email === email);
  if (!user) {
    console.log('No user!!!!!!!');
  }

  return user;
}

function getUsers() {
  return usersMock;
}

function createUser(user) {
  user.id = usersMock.length + 1;
  return usersMock.push(user);
}

// console.log(`getUser__ ${getUser('luis@gmail.com')}`);

module.exports = {
  getUser,
  getUsers,
  createUser,
};
