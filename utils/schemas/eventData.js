const joi = require('joi');

// Schema to validate the data received of the user
const createEventDataSchema = joi.object({
  logo_url: joi.string().uri(),
  background_url: joi.string().uri(),
  title: joi.string().required(),
  description: joi.string(),
  event_image_url: joi.string().uri(),
  event_id: joi.number(),
});

module.exports = {
  createEventDataSchema,
};
