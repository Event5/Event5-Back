const joi = require('joi');

// Schema to validate the data received of the user
const createEmailSchema = joi.object({
  id: joi.number(),
  subject: joi.string().required(),
  content: joi.string(),
  image_url: joi.any(),
  event_id: joi.number(),
});

module.exports = {
  createEmailSchema,
};
