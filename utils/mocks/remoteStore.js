const sinon = require('sinon');

// TODO finish implementing Tests for the services:ƒ
const {
  OrganizationServiceMock,
  organizationMock,
} = require('./organizationMock');

const getAllStub = sinon.stub();
getAllStub.withArgs('organization').resolves(organizationMock);

// const tagQuery
// getAllStub.withArgs('organization').resolves(organizationMock);
