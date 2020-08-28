const emailMock = [
  {
    subject: 'We are about to start',
    content: 'This awesome meeting is starting, get ready!',
    image_url: 'http://images.com/event',
    event_id: 1,
  },
];

class EmailServiceMock {
  constructor() {}

  async getEmail() {
    return Promise.resolve(emailMock);
  }

  async createEmail() {
    return Promise.resolve(emailMock[0]);
  }
}

module.exports = {
  EmailServiceMock,
  emailMock,
};
