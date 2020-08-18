const usersMock = [
  {
    id: 1,
    username: 'Jose',
    email: 'jose@gmail.com',
    password: 'jose123',
    type: 'admin',
  },
  {
    id: 2,
    username: 'Luis',
    email: 'luis@gmail.com',
    password: 'luis123',
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

function getUser(id) {
  return usersMock.filter((user) => user.id === id);
}

function getUsers() {
  return usersMock;
}

function createUser(user) {
  user.id = usersMock.length + 1;
  return usersMock.push(user);
}
