const express = require('express');
const passport = require('passport');
const AssociateService = require('../services/associate');
const validationHandler = require('../utils/middleware/validationHandler');
const { createAssociateSchema } = require('../utils/schemas/associate');
const adminValidationHandler = require('../utils/middleware/adminValidationHandler');
// JWT Strategy
require('../utils/auth/strategies/jwt');

function associateApi(app) {
  const router = express.Router();
  app.use('/api/event', router);

  const associateService = new AssociateService();

  router.post(
    '/associate',
    passport.authenticate('jwt', { session: false }),
    adminValidationHandler(),
    validationHandler(createAssociateSchema),
    async function (req, res, next) {
      const { body: associate } = req;

      try {
        // Store schedule in the DB and return it
        const createdAssociate = await associateService.createAssociate(
          associate
        );
        // Response
        res.status(201).json({
          data: createdAssociate,
          message: 'associate created',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = associateApi;
