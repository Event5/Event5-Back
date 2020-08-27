const express = require('express');
const passport = require('passport');
const ScheduleService = require('../services/schedule');
const validationHandler = require('../utils/middleware/validationHandler');
const { createScheduleSchema } = require('../utils/schemas/schedule');
const adminValidationHandler = require('../utils/middleware/adminValidationHandler');
// JWT Strategy
require('../utils/auth/strategies/jwt');

function scheduleApi(app) {
  const router = express.Router();
  app.use('/api/event', router);

  const scheduleService = new ScheduleService();

  // TODO finish testing schedule
  router.post(
    '/schedule',
    passport.authenticate('jwt', { session: false }),
    adminValidationHandler(),
    validationHandler(createScheduleSchema),
    async function (req, res, next) {
      const { body: schedule } = req;

      try {
        // Store schedule in the DB and return it
        const createdSchedule = await scheduleService.createSchedule(schedule);
        // Response
        res.status(201).json({
          data: createdSchedule,
          message: 'schedule created',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = scheduleApi;
