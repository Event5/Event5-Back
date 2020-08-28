const assert = require('assert');
const proxyquire = require('proxyquire');

const { sendSendGrid, emailMock } = require('../../utils/mocks/emailMock');

describe('Email - services', function () {
  const EmailService = proxyquire('../../services/email', {
    '../lib/sendgrid': sendSendGrid,
  });

  const emailService = new EmailService();

  describe('when email is called', async function () {
    it('should call create method', async function () {
      const result = await emailService.sendEmail(emailMock[0]);
      const expected = emailMock[0];
      assert.deepEqual(result, expected);
    });
  });
});
