const express = require('express');
const passport = require('passport');
const SpeakerService = require('../services/speaker');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const validationHandler = require('../utils/middleware/validationHandler');
const { createSpeakerSchema } = require('../utils/schemas/speaker');
const adminValidationHandler = require('../utils/middleware/adminValidationHandler');
const uploadImage = require('../lib/cloudinary');

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
    upload.single('photo_url'),
    validationHandler(createSpeakerSchema),
    async function (req, res, next) {
      const { body: speaker } = req;

      try {
        // Upload images to the cloud and return the URL
        if (req.file) {
          speaker.photo_url = await uploadImage(req.file.path);
        }
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

  // Update speaker
  router.put(
    '/speaker',
    passport.authenticate('jwt', { session: false }),
    upload.single('photo_url'),
    validationHandler(createSpeakerSchema),
    async function (req, res, next) {
      const { body: speaker } = req;

      try {
        // Upload images to the cloud and return the URL
        if (req.file) {
          speaker.photo_url = await uploadImage(req.file.path);
        }
        // Update speaker that have the same id
        const result = await speakerService.updateSpeaker(speaker);

        // Response
        res.status(200).json({
          data: result,
          message: 'speaker updated successfully',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = speakerApi;
