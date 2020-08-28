const RemoteStore = require('../lib/remoteStore');

class OrganizerService {
  constructor() {
    this.remoteStore = new RemoteStore();
    this.table = 'organizer';
  }

  async createOrganizer(email) {
    // TODO logic to add organizer
    const Organizer = await this.remoteStore.create(this.table, email);
    return Organizer;
  }
}

module.exports = OrganizerService;
