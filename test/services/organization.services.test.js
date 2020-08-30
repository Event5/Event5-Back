const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  OrganizationServiceMock,
  organizationMock,
} = require('../../utils/mocks/organizationMock');

describe('Organization - services', function () {
  const OrganizationService = proxyquire('../../services/organization', {
    '../lib/remoteStore': OrganizationServiceMock,
  });

  const organizationService = new OrganizationService();

  describe('when organization is called', async function () {
    it('should call create method', async function () {
      const result = await organizationService.createOrganization();
      const expected = organizationMock[0];
      assert.deepEqual(result, expected);
    });
    it('should call update method', async function () {
      const result = await organizationService.updateOrganization();
      const expected = organizationMock[0];
      assert.deepEqual(result, expected);
    });
  });
});
