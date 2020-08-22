const sgMail = require('@sendgrid/mail');
const config = require('../config/config');

sgMail.setApiKey(config.sendgrid_api_key);

async function sendSendGrid(msg) {
  try {
    const sended = await sgMail.send(msg);
    if (sended) {
      return true;
    }
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = sendSendGrid;
