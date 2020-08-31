const RemoteStore = require('../lib/remoteStore');

class OrganizerService {
  constructor() {
    this.remoteStore = new RemoteStore();
    this.table = 'organizer';
  }

  async createOrganizer(organizer) {
    this.table = 'user';
    // Get Organizer data
    const getOrganizer = await this.remoteStore.get(
      this.table,
      organizer.email
    );

    // Change Table
    this.table = 'event-detail';

    // Find the Event where we are going to add the Organizer
    const organizerEvent = await this.remoteStore.get(
      this.table,
      organizer.event_id
    );

    // Add Organizer to the Event
    if (
      Array.isArray(organizerEvent.users) &&
      organizerEvent.users.length >= 1
    ) {
      organizerEvent.users.push(getOrganizer.id);
    }

    // Update Event Information with the new Organizer
    const organizerUpdated = await this.remoteStore.update(
      this.table,
      organizerEvent
    );

    return organizerUpdated;
  }
}

module.exports = OrganizerService;
