const express = require('express');
const passport = require('passport');
const SpeakerService = require('../services/speaker');
const validationHandler = require('../utils/middleware/validationHandler');
const { createSpeakerSchema } = require('../utils/schemas/speaker');
const adminValidationHandler = require('../utils/middleware/adminValidationHandler');
// JWT Strategy
require('../utils/auth/strategies/jwt');

function speakerApi(app) {
  const router = express.Router();
  app.use('/api/event', router);

  const speakerService = new SpeakerService();

  router.post(
    '/speaker',
    passport.authenticate('jwt', { session: false }),
    adminValidationHandler(),
    validationHandler(createSpeakerSchema),
    async function (req, res, next) {
      const { body: speaker } = req;

      try {
        // Store schedule in the DB and return it
        const createdSpeaker = await speakerService.createSpeaker(speaker);
        // Response
        res.status(201).json({
          data: createdSpeaker,
          message: 'speaker created',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = speakerApi;
