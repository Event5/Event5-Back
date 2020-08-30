const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  SpeakerServiceMock,
  speakerMock,
} = require('../../utils/mocks/speakerMock');

describe('Speaker - services', function () {
  const SpeakerService = proxyquire('../../services/speaker', {
    '../lib/remoteStore': SpeakerServiceMock,
  });

  const speakerService = new SpeakerService();

  describe('when speaker is called', async function () {
    it('should call create method', async function () {
      const result = await speakerService.createSpeaker(speakerMock[0]);
      const expected = speakerMock[0];
      assert.deepEqual(result, expected);
    });
    it('should call update method', async function () {
      const result = await speakerService.updateSpeaker(speakerMock[0]);
      const expected = speakerMock[0];
      assert.deepEqual(result, expected);
    });
  });
});
