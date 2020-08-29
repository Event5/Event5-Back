const express = require('express');
const passport = require('passport');
const GetDataService = require('../services/getData');
const adminValidationHandler = require('../utils/middleware/adminValidationHandler');
// JWT Strategy
require('../utils/auth/strategies/jwt');

function getDataApi(app) {
  const router = express.Router();
  app.use('/api/data', router);

  const getDataService = new GetDataService();

  router.get(
    '/admin',
    passport.authenticate('jwt', { session: false }),
    adminValidationHandler(),
    async function (req, res, next) {
      const admin = req.query.user_id;

      try {
        // Get admin from the DB
        const adminResult = await getDataService.getAdmin(admin);
        // Response
        res.status(201).json({
          data: adminResult,
          message: 'admin obtained',
        });
      } catch (error) {
        next(error);
      }
    }
  );
  router.get(
    '/organizer',
    passport.authenticate('jwt', { session: false }),
    async function (req, res, next) {
      const organizer = req.query.user_id;

      try {
        // Get organizer from the DB
        const organizerResult = await getDataService.getOrganizer(organizer);
        // Response
        res.status(201).json({
          data: organizerResult,
          message: 'organizer obtained',
        });
      } catch (error) {
        next(error);
      }
    }
  );
  router.get(
    '/id_event',
    passport.authenticate('jwt', { session: false }),
    adminValidationHandler(),
    async function (req, res, next) {
      const id_event = req.query.user_id;

      try {
        // Get id_event from the DB
        const id_eventResult = await getDataService.getIdEvent(id_event);
        // Response
        res.status(201).json({
          data: id_eventResult,
          message: 'id_event obtained',
        });
      } catch (error) {
        next(error);
      }
    }
  );
  router.get('/url_event', async function (req, res, next) {
    const url_event = req.query.event_url;

    try {
      // Get url_event from the DB
      const url_eventResult = await getDataService.getUrlEvent(url_event);

      let response = url_eventResult;

      // Check if the response is an Array
      if (Array.isArray(url_eventResult)) response = url_eventResult[0];

      // Response
      res.status(201).json({
        data: response,
        message: 'url_event obtained',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = getDataApi;
