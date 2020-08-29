const express = require('express');
const passport = require('passport');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const EventDataService = require('../services/eventData');
const validationHandler = require('../utils/middleware/validationHandler');
const { createEventDataSchema } = require('../utils/schemas/eventData');
const adminValidationHandler = require('../utils/middleware/adminValidationHandler');
const uploadImage = require('../lib/cloudinary');
// JWT Strategy
require('../utils/auth/strategies/jwt');

function eventDataApi(app) {
  const router = express.Router();
  app.use('/api/event', router);

  const eventDataService = new EventDataService();

  // Images field names:
  const uploadedImages = upload.fields([
    { name: 'logo_url' },
    { name: 'background_url' },
    { name: 'event_image_url' },
  ]);

  async function uploadImages(eventData, req) {
    // Upload images to the cloud and return the URL
    if (typeof req.files !== 'undefined') {
      if (typeof req.files.logo_url !== 'undefined') {
        eventData.logo_url = await uploadImage(req.files.logo_url[0].path);
      }
      if (typeof req.files.background_url !== 'undefined') {
        eventData.background_url = await uploadImage(
          req.files.background_url[0].path
        );
      }
      if (typeof req.files.event_image_url !== 'undefined') {
        eventData.event_image_url = await uploadImage(
          req.files.event_image_url[0].path
        );
      }
    }
    return eventData;
  }

  // create new event data
  router.post(
    '/new-event-data',
    passport.authenticate('jwt', { session: false }),
    adminValidationHandler(),
    uploadedImages,
    validationHandler(createEventDataSchema),
    async function (req, res, next) {
      const { body: Data } = req;
      try {
        const eventData = await uploadImages(Data, req);
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

  // Update event data
  router.put(
    '/new-event-data',
    passport.authenticate('jwt', { session: false }),
    uploadedImages,
    async function (req, res, next) {
      const { body: Data } = req;

      try {
        const eventData = await uploadImages(Data, req);
        // Update event that have the same id
        const result = await eventDataService.updateEventData(eventData);

        // Response
        res.status(200).json({
          data: result,
          message: 'event data updated successfully',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = eventDataApi;
