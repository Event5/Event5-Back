// const { registryMock } = require('../utils/mocks/registryMock');
// const CrudMock = require('../utils/mocks/crud');

// const mailgun = require('../lib/mailgun');
const sendgrid = require('../lib/sendgrid');

class EmailService {
  constructor() {
    this.data = {};
  }

  async sendEmail(email) {
    // TODO get all the event emails and send the email to all of them
    this.data = {
      to: [
        'josephsiul15@gmail.com',
        // 'hectordevx@gmail.com',
        // 'den.velez@gmail.com',
        // 'sergio.estrella@utp.edu.co',
        // 'cristianalbertocortesgutierrez@gmail.com',
      ],
      from: 'luischg11@hotmail.com',
      templateId: 'd-de38317b628d480084fbfc397b599477',
      dynamic_template_data: {
        subject: email.subject,
        title: email.subject,
        content: email.content,
        image_url: email.image_url,
      },
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
