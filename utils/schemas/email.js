const joi = require('joi');

// Schema to validate the data received of the user
const createEmailSchema = joi.object({
  subject: joi.string().required(),
  content: joi.string(),
  image_url: joi.string().uri(),
});

module.exports = {
  createEmailSchema,
};
