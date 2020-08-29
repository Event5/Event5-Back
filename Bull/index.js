const Queue = require('bull');
const nodemailer = require('nodemailer');
// 1. Initiating the Queue
const sendMailQueue = new Queue('sendMail', {
  redis: {
    host: '127.0.0.1',
    port: 6379,
  },
});
const data = {
  email: 'josephsiul15@gmail.com',
};

const options = {
  delay: 60000, // 1 min in ms
  attempts: 2,
};
// 2. Adding a Job to the Queue
sendMailQueue.add(data, options);

// 3. Consumer
sendMailQueue.process(async (job) => {
  try {
    console.log(job.data.email);
    return await sendMail(job.data.email);
  } catch (error) {
    console.log(error);
  }
});
function sendMail(email) {
  // return Promise.resolve(email);
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from: 'luischg11@hotmail.com',
      to: email,
      subject: 'Bull - npm',
      text: 'This email is from bull job scheduler tutorial.',
    };
    let mailConfig = {
      service: 'outlook',
      auth: {
        user: 'luischg11@hotmail.com',
        pass: 'QBTlLFT1hFpc3rjy0c5puLh0VJotD7jVO5oVlxyxO&Iady*t1C',
      },
    };
    nodemailer
      .createTransport(mailConfig)
      .sendMail(mailOptions, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
  });
}
