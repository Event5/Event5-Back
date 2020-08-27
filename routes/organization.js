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

  // Create new Organization
  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    adminValidationHandler(),
    validationHandler(createOrganizationSchema),
    async function (req, res, next) {
      const { body: organization } = req;

      // Add the current user_id to the organization
      if (!organization.user_id) {
        organization.user_id = req.user.id;
      }

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

  // Get organization
  router.get('/', async function (req, res, next) {
    const id = req.query.user_id;

    try {
      // Get Organizations that have the same user_id
      const organization = await organizationService.getOrganization(id);

      if (organization.detail) {
        next(organization.detail);
      } else {
        // Response
        res.status(200).json({
          data: organization,
          message: 'organization returned successfully',
        });
      }
    } catch (error) {
      next(error);
    }
  });
}

module.exports = organizationApi;
