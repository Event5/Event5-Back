const express = require('express');
const OrganizationService = require('../services/organization');
const validationHandler = require('../utils/middleware/validationHandler');
const { createOrganizationSchema } = require('../utils/schemas/organization');

function organizationApi(app) {
  const router = express.Router();
  app.use('/api/organization', router);

  const organizationService = new OrganizationService();

  router.post(
    '/',
    validationHandler(createOrganizationSchema),
    async function (req, res, next) {
      const { body: organization } = req;

      try {
        // Store registry in the DB and return it
        const createdOrganization = await organizationService.createOrganization(organization);
        // Response
        res.status(201).json({
          data: createdOrganization,
          message: 'organization created',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = organizationApi;
