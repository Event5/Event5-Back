const joi = require('joi');

// Schema to validate the data received of the user
const createEventDataSchema = joi.object({
  id: joi.number(),
  logo_url: joi.any(),
  background_url: joi.any(),
  title: joi.string().required(),
  description: joi.string(),
  event_image_url: joi.any(),
  event_id: joi.number().required(),
});

module.exports = {
  createEventDataSchema,
};
