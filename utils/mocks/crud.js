class CrudMock {
  getUser(email, mock) {
    const user = mock.find((user) => user.email === email);
    if (!user) {
      console.log('No user!!!!!!!');
    }

    return user;
  }

  create(data, mock) {
    const newData = Object.assign({ id: mock.length + 1 }, data);

    mock.push(newData);
    const speakerCreated = mock.find((val) => val.id === newData.id);
    return speakerCreated;
  }
}

module.exports = CrudMock;
