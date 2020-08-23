const express = require('express');
const EventService = require('../services/event');
const validationHandler = require('../utils/middleware/validationHandler');
const { createEventSchema } = require('../utils/schemas/event');

function eventApi(app) {
  const router = express.Router();
  app.use('/api/event', router);

  const eventService = new EventService();

  router.post(
    '/new-event',
    validationHandler(createEventSchema),
    async function (req, res, next) {
      const { body: event } = req;

      try {
        // Store event in the DB and return it
        const createdEvent = await eventService.createEvent(event);
        // Response
        res.status(201).json({
          data: createdEvent,
          message: 'event created',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = eventApi;
