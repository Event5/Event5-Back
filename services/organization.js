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

  // async getOrganization(id) {
  //   const idValues = `?user_id=${id}`;
  //   this.table = 'organization-user';
  //   const organization = await this.remoteStore.get(this.table, idValues);
  //   return organization;
  // }
}

module.exports = OrganizationService;
