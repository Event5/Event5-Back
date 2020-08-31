const assert = require('assert');
const proxyquire = require('proxyquire');

const { emailMock, EmailServiceMock } = require('../../utils/mocks/emailMock');

describe('Email - services', function () {
  const Request = proxyquire('../../services/email', {
    '../lib/emailSystem': EmailServiceMock,
  });

  const request = new Request();

  describe('When Sending Emails', async function () {
    it('should call sendEmail method', async function () {
      const result = await request.sendEmail(emailMock[0]);
      const expected = true;
      assert.deepEqual(result, expected);
    });
    it('should call scheduleEmail method', async function () {
      const result = await request.scheduleEmail(emailMock[0]);
      const expected = true;
      assert.deepEqual(result, expected);
    });
    it('should call rescheduleEmail method', async function () {
      const result = await request.rescheduleEmail(emailMock[0]);
      const expected = true;
      assert.deepEqual(result, expected);
    });
  });
});
