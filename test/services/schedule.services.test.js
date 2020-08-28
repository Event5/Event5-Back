const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  ScheduleServiceMock,
  scheduleMock,
} = require('../../utils/mocks/scheduleMock');

describe('Schedule - services', function () {
  const ScheduleService = proxyquire('../../services/schedule', {
    '../lib/remoteStore': ScheduleServiceMock,
  });

  const scheduleService = new ScheduleService();

  describe('when schedule is called', async function () {
    it('should call create method', async function () {
      const result = await scheduleService.createSchedule(scheduleMock[0]);
      const expected = scheduleMock[0];
      assert.deepEqual(result, expected);
    });
  });
});
