const sendGrid = require('./sendgrid');
const config = require('../config/config');
const schedule = require('node-schedule');
const { getEmails } = require('./getEmails');

class EmailSystem {
  constructor() {}

  // Send instant Email
  async sendEmail(data, emails, personalized = false) {
    let dataEmail = {};
    if (personalized) {
      dataEmail = {
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
    } else {
      dataEmail = {
        to: emails,
        from: config.sendGrid.email,
        templateId: 'd-de38317b628d480084fbfc397b599477',
        dynamic_template_data: {
          subject: `You registered to: ${data.event_name}`,
          title: `You are registered to ${data.event_name}`,
          content: 'Remember to be on time, and Enjoy!',
          image_url:
            'https://res.cloudinary.com/guerracode/image/upload/v1598831443/E5Logo-orange_tsmxi8.png',
        },
      };
    }

    try {
      // Send email with SendGrid
      const mail = await sendGrid(dataEmail);
      console.log('Email Send!!!');
      if (!mail) {
        throw new Error('Error sending the Email');
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  // Schedule an Email
  scheduleEmail(data, rescheduleEmail = false) {
    // date = 'Sun, 31 Aug 2020 21:38:00 GMT';
    let date = data.event_start_date;
    let dateLocal = new Date(date.toLocaleString());
    let dateLess = dateLocal.setDate(dateLocal.getDate() - 1);
    let startTime = new Date(dateLess);
    console.log('DATE== ' + startTime.toString());

    const userJobs = {};

    if (!rescheduleEmail) {
      userJobs[data.id] = schedule.scheduleJob(
        startTime,
        async function () {
          const emails = await getEmails(data.id);
          if (emails.length > 0) {
            await this.sendEmail(data, emails);
          }
          delete userJobs[data.event_id];
        }.bind(this)
      );
    } else {
      if (userJobs[data.event_id]) {
        userJobs[data.event_id].reschedule(startTime);
      } else {
        return false;
      }
    }

    return data;
  }
}

module.exports = EmailSystem;
