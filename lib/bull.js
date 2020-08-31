const Queue = require('bull');
const sendGrid = require('./sendgrid');
const config = require('../config/config');

class EmailQueue {
  constructor() {
    // initialize queue
    this.queue = new Queue('sendEmail', {
      redis: {
        host: '127.0.0.1',
        port: 6379,
      },
    });
    // add a worker
    this.queue.process('email', (job) => {
      this.sendEmail(job);
    });
    this.queue.process('repeat', (job) => {
      this.testRepeat(job);
    });
  }

  addEmailToQueue(data) {
    this.queue.add('email', data);
  }

  scheduleEmailToQueue(data) {
    // this.queue.add('repeat', { repeat: { cron: '* * * * *' } });
    this.queue.add('repeat', { delay: 10000 });
  }

  async testRepeat() {
    console.log('-----CRONE-----');
    console.log('---Is Working!---');
    console.log('-----CRONE-----');
  }

  async sendEmail(job) {
    const { emails, subject, content, image_url } = job.data;
    const dataEmail = {
      to: emails,
      from: config.sendGrid.email,
      templateId: 'd-de38317b628d480084fbfc397b599477',
      dynamic_template_data: {
        subject: subject,
        title: subject,
        content: content,
        image_url: image_url,
      },
    };

    try {
      // Send email with SendGrid
      const mail = await sendGrid(dataEmail);
      if (!mail) {
        throw new Error('Error sending the Email');
      }
      job.moveToCompleted('done', true);
    } catch (error) {
      if (error.response) {
        job.moveToFailed({ message: 'job failed' });
      }
    }
  }
}

module.exports = EmailQueue;
