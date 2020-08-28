const assert = require('assert');
const proxyquire = require('proxyquire');

const { EventServiceMock, eventMock } = require('../../utils/mocks/eventMock');

describe('Event - services', function () {
  const EventService = proxyquire('../../services/event', {
    '../lib/remoteStore': EventServiceMock,
  });

  const eventService = new EventService();

  describe('when event is called', async function () {
    it('should call create method', async function () {
      const result = await eventService.createEvent(eventMock[0]);
      const expected = eventMock[0];
      assert.deepEqual(result, expected);
    });
  });
});
