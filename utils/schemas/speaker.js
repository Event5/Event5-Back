const joi = require('joi');

// Schema to validate the data received of the user
const createSpeakerSchema = joi.object({
  id: joi.number(),
  name: joi.string().min(3).max(100).required(),
  biography: joi.string(),
  role: joi.string(),
  twitter: joi.string(),
  photo_url: joi.any(),
  schedule_id: joi.array().items(joi.number()).required(),
});

module.exports = {
  createSpeakerSchema,
};
