const express = require('express');
const passport = require('passport');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const AssociateService = require('../services/associate');
const validationHandler = require('../utils/middleware/validationHandler');
const { createAssociateSchema } = require('../utils/schemas/associate');
const adminValidationHandler = require('../utils/middleware/adminValidationHandler');
const uploadImage = require('../lib/cloudinary');

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
    upload.single('logo_url'),
    validationHandler(createAssociateSchema),
    async function (req, res, next) {
      const { body: associate } = req;

      try {
        // Upload images to the cloud and return the URL
        if (req.file) {
          associate.logo_url = await uploadImage(req.file.path);
        }
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
