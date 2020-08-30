const sendGrid = require('../lib/sendgrid');
const RemoteStore = require('../lib/remoteStore');
const config = require('../config/config');

class EmailService {
  constructor() {
    this.remoteStore = new RemoteStore();
    this.table = 'registry-event';
    this.dataEmail = {};
  }

  async getEmails(id) {
    const data = `?event_id=${id}`;
    let registryResponse = await this.remoteStore.get(this.table, data);

    if (Array.isArray(registryResponse)) {
      registryResponse = registryResponse.map((a) => a.email);
    }

    return registryResponse;
  }

  async sendEmail(data, emails) {
    this.dataEmail = {
      to: emails,
      from: config.sendGrid.email,
      templateId: 'd-de38317b628d480084fbfc397b599477',
      dynamic_template_data: {
        subject: data.subject,
        title: data.subject,
        content: data.content,
        image_url: data.image_url,
      },
    };

    try {
      // Send email with SendGrid
      const mail = await sendGrid(this.dataEmail);
      if (!mail) {
        throw new Error('Error sending the Email');
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = EmailService;
