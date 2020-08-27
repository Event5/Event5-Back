const RemoteStore = require('../lib/remoteStore');

class SpeakerService {
  constructor() {
    this.remoteStore = new RemoteStore();
    this.table = 'speaker';
  }

  async createSpeaker(speaker) {
    const createdSpeaker = await this.remoteStore.create(this.table, speaker);
    return createdSpeaker;
  }
}

module.exports = SpeakerService;
