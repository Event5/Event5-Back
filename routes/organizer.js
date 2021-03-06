const express = require('express');
const OrganizerService = require('../services/organizer');
const passport = require('passport');
const validationHandler = require('../utils/middleware/validationHandler');
const { createOrganizerSchema } = require('../utils/schemas/organizer');
const adminValidationHandler = require('../utils/middleware/adminValidationHandler');
// JWT Strategy
require('../utils/auth/strategies/jwt');

function organizerApi(app) {
  const router = express.Router();
  app.use('/api/event', router);

  const organizerService = new OrganizerService();

  // Add new Organizer to a Event
  router.post(
    '/organizer',
    passport.authenticate('jwt', { session: false }),
    adminValidationHandler(),
    validationHandler(createOrganizerSchema),
    async function (req, res, next) {
      const { body: organizer } = req;

      try {
        // Store the added organizer in the DB and return it
        const createdOrganizer = await organizerService.createOrganizer(
          organizer
        );
        // Response
        res.status(201).json({
          data: createdOrganizer,
          message: 'organizer added',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = organizerApi;
