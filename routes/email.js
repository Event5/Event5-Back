const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const EmailService = require('../services/email');
const validationHandler = require('../utils/middleware/validationHandler');
const { createEmailSchema } = require('../utils/schemas/email');
const uploadImage = require('../lib/cloudinary');
const { getEmails } = require('../lib/getEmails');

function emailApi(app) {
  const router = express.Router();
  app.use('/api/email', router);

  const emailService = new EmailService();

  router.post(
    '/',
    upload.single('image_url'),
    validationHandler(createEmailSchema),
    async function (req, res, next) {
      const { body: registry } = req;

      try {
        // Get Registered Users of an Event
        const emails = await getEmails(registry.event_id);

        if (emails.length <= 0) {
          next('No users Registered');
        }

        // Upload images to the cloud and return the URL
        if (req.file) {
          registry.image_url = await uploadImage(req.file.path);
        }

        // Send email
        const emailSended = await emailService.sendEmail(
          registry,
          emails,
          true
        );
        // Response
        res.status(201).json({
          data: emailSended,
          message: 'email send',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = emailApi;
