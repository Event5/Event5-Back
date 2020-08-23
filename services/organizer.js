const { userMock } = require('../utils/mocks/userMock');
const CrudMock = require('../utils/mocks/crud');

class OrganizerService {
  constructor() {
    this.crudMock = new CrudMock();
  }

  async getOrganizer(email) {
    // TODO logic to add organizer
    const getOrganizer = await this.crudMock.getUser(email, userMock);
    return getOrganizer;
  }
}

module.exports = OrganizerService;
