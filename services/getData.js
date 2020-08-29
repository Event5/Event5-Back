const remoteStore = require('../lib/remoteStore');

class GetDataService {
  constructor() {
    this.remoteStore = new remoteStore();
    this.table = '';
  }

  async getAdmin(id) {
    this.table = 'dashboard-admin-id';
    const data = `?users=${id}`;
    const adminData = await this.remoteStore.get(this.table, data);
    return adminData;
  }

  async getOrganizer(id) {
    this.table = 'event-organizer-id';
    const data = `?user_id=${id}`;
    const organizerData = await this.remoteStore.get(this.table, data);
    return organizerData;
  }

  async getIdEvent(id) {
    this.table = 'complete-event-id';
    const eventData = await this.remoteStore.get(this.table, id);
    return eventData;
  }

  async getUrlEvent(url) {
    this.table = 'complete-event-url';
    const data = `?url=${url}`;
    const eventData = await this.remoteStore.get(this.table, data);
    return eventData;
  }
}

module.exports = GetDataService;
