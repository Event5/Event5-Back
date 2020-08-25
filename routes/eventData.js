const express = require('express');
const passport = require('passport');
const EventDataService = require('../services/eventData');
const validationHandler = require('../utils/middleware/validationHandler');
const { createEventDataSchema } = require('../utils/schemas/eventData');
const adminValidationHandler = require('../utils/middleware/adminValidationHandler');
// JWT Strategy
require('../utils/auth/strategies/jwt');

function eventDataApi(app) {
  const router = express.Router();
  app.use('/api/event', router);

  const eventDataService = new EventDataService();

  // TODO Add Logic for the images
  router.post(
    '/new-event-data',
    passport.authenticate('jwt', { session: false }),
    adminValidationHandler(),
    validationHandler(createEventDataSchema),
    async function (req, res, next) {
      const { body: eventData } = req;

      try {
        // Store event in the DB and return it
        const createdEventData = await eventDataService.createEventData(
          eventData
        );
        // Response
        res.status(201).json({
          data: createdEventData,
          message: 'event data created',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = eventDataApi;
