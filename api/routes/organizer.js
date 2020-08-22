const express = require('express');
const OrganizerService = require('../services/organizer');
// const validationHandler = require('../utils/middleware/validationHandler');
// const { createOrganizerSchema } = require('../utils/schemas/organizer');

function organizerApi(app) {
  const router = express.Router();
  app.use('/api/event', router);

  const organizerService = new OrganizerService();

  router.get(
    '/organizer',
    async function (req, res, next) {
      // const { body: organizer } = req;

      try {
        // Store organizer in the DB and return it
        const createdOrganizer = await organizerService.getOrganizer(req.query.email);
        // Response
        res.status(201).json({
          data: createdOrganizer,
          message: 'organizer created',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = organizerApi;
