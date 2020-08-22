const joi = require('joi');

// Schema to validate the data received of the user
const createSpeakerSchema = joi.object({
  name: joi.string().min(3).max(100).required(),
  biography: joi.string(),
  role: joi.string(),
  twitter: joi.string(),
  photo_url: joi.string().uri(),
});

module.exports = {
  createSpeakerSchema,
};
