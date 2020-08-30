const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  getDataMock,
  GetDataServiceMock,
} = require('../../utils/mocks/getDataMock');

describe('GetData - services', function () {
  const GetDataService = proxyquire('../../services/getData', {
    '../lib/remoteStore': GetDataServiceMock,
  });

  const getDataService = new GetDataService();

  describe('when getData is called', async function () {
    it('should call getAdmin method', async function () {
      const result = await getDataService.getAdmin(getDataMock[0]);
      const expected = getDataMock[0];
      assert.deepEqual(result, expected);
    });
    it('should call getOrganizer method', async function () {
      const result = await getDataService.getOrganizer(getDataMock[0]);
      const expected = getDataMock[0];
      assert.deepEqual(result, expected);
    });
    it('should call getOrganizer method', async function () {
      const result = await getDataService.getOrganizer(getDataMock[0]);
      const expected = getDataMock[0];
      assert.deepEqual(result, expected);
    });
    it('should call getIdEvent method', async function () {
      const result = await getDataService.getIdEvent(getDataMock[0]);
      const expected = getDataMock[0];
      assert.deepEqual(result, expected);
    });
    it('should call getUrlEvent method', async function () {
      const result = await getDataService.getUrlEvent(getDataMock[0]);
      const expected = getDataMock[0];
      assert.deepEqual(result, expected);
    });
  });
});
