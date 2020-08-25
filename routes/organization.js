const express = require('express');
const passport = require('passport');
const OrganizationService = require('../services/organization');
const validationHandler = require('../utils/middleware/validationHandler');
const { createOrganizationSchema } = require('../utils/schemas/organization');
const adminValidationHandler = require('../utils/middleware/adminValidationHandler');
// JWT Strategy
require('../utils/auth/strategies/jwt');

function organizationApi(app) {
  const router = express.Router();
  app.use('/api/organization', router);

  const organizationService = new OrganizationService();

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    adminValidationHandler(),
    validationHandler(createOrganizationSchema),
    async function (req, res, next) {
      const { body: organization } = req;

      // Add the current user_id to the organization
      organization.user_id = req.user.id;

      try {
        // Store registry in the DB and return it
        const createdOrganization = await organizationService.createOrganization(
          organization
        );
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
