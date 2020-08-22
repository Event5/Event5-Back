// const { registryMock } = require('../utils/mocks/registryMock');
// const CrudMock = require('../utils/mocks/crud');

// const mailgun = require('../lib/mailgun');
const sendgrid = require('../lib/sendgrid');

class EmailService {
  constructor() {
    this.data = {};
  }

  async sendEmail(email) {
    this.data = {
      to: 'josephsiul15@gmail.com',
      from: 'luischg11@hotmail.com',
      subject: email.subject,
      text: email.content,
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    try {
      // Send email with SendGrid
      const mail = await sendgrid(this.data);
      if (!mail) {
        throw new Error('Error sending the Email');
      }
      return email;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = EmailService;
