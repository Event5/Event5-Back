const { organizationMock } = require('../utils/mocks/organizationMock');
const CrudMock = require('../utils/mocks/crud');

class OrganizationService {
  constructor() {
    this.crudMock = new CrudMock();
  }

  async createOrganization(organization) {
    const createdOrganization = await this.crudMock.create(
      organization,
      organizationMock
    );
    return createdOrganization;
  }
}

module.exports = OrganizationService;
