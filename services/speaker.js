const { speakerMock } = require('../utils/mocks/speakerMock');
const CrudMock = require('../utils/mocks/crud');

class SpeakerService {
  constructor() {
    this.crudMock = new CrudMock();
  }

  async createSpeaker(speaker) {
    const createdSpeaker = await this.crudMock.create(speaker, speakerMock);
    return createdSpeaker;
  }
}

module.exports = SpeakerService;
