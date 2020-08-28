const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  OrganizerServiceMock,
  organizerMock,
} = require('../../utils/mocks/organizerMock');

describe('Organizer - services', function () {
  const OrganizerService = proxyquire('../../services/organizer', {
    '../lib/remoteStore': OrganizerServiceMock,
  });

  const organizerService = new OrganizerService();

  describe('when organizer is called', async function () {
    it('should call create method', async function () {
      const result = await organizerService.createOrganizer(organizerMock[0]);
      const expected = organizerMock[0];
      assert.deepEqual(result, expected);
    });
  });
});
