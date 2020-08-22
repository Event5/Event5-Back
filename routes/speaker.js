const express = require('express');
const SpeakerService = require('../services/speaker');
const validationHandler = require('../utils/middleware/validationHandler');
const { createSpeakerSchema } = require('../utils/schemas/speaker');

function speakerApi(app) {
  const router = express.Router();
  app.use('/api/event', router);

  const speakerService = new SpeakerService();

  router.post(
    '/speaker',
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
