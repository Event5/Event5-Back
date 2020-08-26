const express = require('express');
const RegistryService = require('../services/registry');
const validationHandler = require('../utils/middleware/validationHandler');
const { createRegistrySchema } = require('../utils/schemas/registry');
// JWT Strategy
require('../utils/auth/strategies/jwt');

function registryApi(app) {
  const router = express.Router();
  app.use('/api/event', router);

  const registryService = new RegistryService();

  router.post(
    '/registry',
    validationHandler(createRegistrySchema),
    async function (req, res, next) {
      const { body: registry } = req;

      try {
        // Store registry in the DB and return it
        const createdRegistry = await registryService.createRegistry(registry);
        // Response
        res.status(201).json({
          data: createdRegistry,
          message: 'registry created',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = registryApi;
