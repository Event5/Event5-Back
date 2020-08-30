const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  sendSendGrid,
  emailMock,
  EmailServiceMock,
} = require('../../utils/mocks/emailMock');

describe('Email - services', function () {
  const EmailService = proxyquire('../../services/email', {
    '../lib/sendgrid': sendSendGrid,
  });

  const emailService = new EmailService();

  describe('when sending an Email', async function () {
    it('should call sendEmail method', async function () {
      const result = await emailService.sendEmail(emailMock[0]);
      const expected = emailMock[0];
      assert.deepEqual(result, expected);
    });
  });

  const Request = proxyquire('../../services/email', {
    '../lib/remoteStore': EmailServiceMock,
  });

  const request = new Request();

  describe('when searching for Registry', async function () {
    it('should call getEmails method', async function () {
      const result = await request.getEmails(emailMock[0]);
      const expected = emailMock[0];
      assert.deepEqual(result, expected);
    });
  });
});
