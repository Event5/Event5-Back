const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  EventDataServiceMock,
  eventDataMock,
} = require('../../utils/mocks/eventDataMocks');

describe('EventData - services', function () {
  const EventDataService = proxyquire('../../services/eventData', {
    '../lib/remoteStore': EventDataServiceMock,
  });

  const eventDataService = new EventDataService();

  describe('when eventData is called', async function () {
    it('should call create method', async function () {
      const result = await eventDataService.createEventData(eventDataMock[0]);
      const expected = eventDataMock[0];
      assert.deepEqual(result, expected);
    });
  });
});
