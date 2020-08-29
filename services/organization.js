const RemoteStore = require('../lib/remoteStore');

class OrganizationService {
  constructor() {
    this.remoteStore = new RemoteStore();
    this.table = 'organization';
  }

  async createOrganization(organization) {
    const createdOrganization = await this.remoteStore.create(
      this.table,
      organization
    );
    return createdOrganization;
  }

  async updateOrganization(data) {
    // const idValues = `?user_id=${id}`;
    this.table = 'organization-detail';

    const organization = await this.remoteStore.update(this.table, data);
    return organization;
  }
}

module.exports = OrganizationService;
