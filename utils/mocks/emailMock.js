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

  getEmails() {
    return Promise.resolve(emailMock);
  }

  sendEmail() {
    return Promise.resolve(emailMock[0]);
  }

  get() {
    return Promise.resolve(emailMock[0]);
  }
  scheduleEmail() {
    return true;
  }
  rescheduleEmail() {
    return true;
  }
}

function sendSendGrid() {
  return Promise.resolve(emailMock[0]);
}

module.exports = {
  EmailServiceMock,
  emailMock,
  sendSendGrid,
};
