const RemoteStore = require('../lib/remoteStore');
const Email = require('./email');
const { getEvent } = require('../lib/getEmails');

class RegistryService {
  constructor() {
    this.remoteStore = new RemoteStore();
    this.email = new Email();
    this.table = 'registry';
  }

  async createRegistry(registry) {
    let createdRegistry = await this.remoteStore.create(this.table, registry);

    if (typeof createdRegistry === 'object') {
      const event = await getEvent(registry.event_id[0]);
      await this.email.sendEmail(event, registry.email);
    } else {
      createdRegistry = 'Email already Exists';
    }
    return createdRegistry;
  }
}

module.exports = RegistryService;
