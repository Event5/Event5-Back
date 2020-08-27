const organizationMock = [
  {
    id: 1,
    name: 'React Mexico',
    url: 'react-mexico',
    user_id: 1,
  },
];

class OrganizationServiceMock {
  constructor() {}

  async getOrganization() {
    return Promise.resolve(organizationMock);
  }

  async createOrganization() {
    return Promise.resolve(organizationMock[0]);
  }
}

module.exports = {
  OrganizationServiceMock,
  organizationMock,
};
