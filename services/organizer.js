const RemoteStore = require('../lib/remoteStore');

class OrganizerService {
  constructor() {
    this.remoteStore = new RemoteStore();
    this.table = 'organizer';
  }

  async getOrganizer(email) {
    // TODO logic to add organizer
    const getOrganizer = await this.crudMock.create(this.table, email);
    return getOrganizer;
  }
}

module.exports = OrganizerService;
