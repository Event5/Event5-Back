const organizationMock = [
  {
    name: 'React Mexico',
    url: 'react-mexico',
    user_id: 1,
  },
];

class OrganizationServiceMock {
  constructor() {}

  getOrganization() {
    return Promise.resolve(organizationMock);
  }

  createOrganization() {
    return Promise.resolve(organizationMock[0]);
  }

  get() {
    return Promise.resolve(organizationMock[0]);
  }

  create() {
    return Promise.resolve(organizationMock[0]);
  }
}

module.exports = {
  OrganizationServiceMock,
  organizationMock,
};
