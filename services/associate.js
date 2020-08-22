const { associateMock } = require('../utils/mocks/associateMock');
const CrudMock = require('../utils/mocks/crud');

class AssociateService {
  constructor() {
    this.crudMock = new CrudMock();
  }

  async createAssociate(associate) {
    const createdAssociate = await this.crudMock.create(
      associate,
      associateMock
    );
    return createdAssociate;
  }
}

module.exports = AssociateService;
