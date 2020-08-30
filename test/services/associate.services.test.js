const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  AssociateServiceMock,
  associateMock,
} = require('../../utils/mocks/associateMock');

describe('Associate - services', function () {
  const AssociateService = proxyquire('../../services/associate', {
    '../lib/remoteStore': AssociateServiceMock,
  });

  const associateService = new AssociateService();

  describe('when associate is called', async function () {
    it('should call create method', async function () {
      const result = await associateService.createAssociate(associateMock[0]);
      const expected = associateMock[0];
      assert.deepEqual(result, expected);
    });
    it('should call update method', async function () {
      const result = await associateService.updateAssociate(associateMock[0]);
      const expected = associateMock[0];
      assert.deepEqual(result, expected);
    });
  });
});
