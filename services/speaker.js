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

  async updateSpeaker(speaker) {
    this.table = 'speaker-detail'
    const updatedSpeaker = await this.remoteStore.update(this.table, speaker);
    return updatedSpeaker;
  }
}

module.exports = SpeakerService;
