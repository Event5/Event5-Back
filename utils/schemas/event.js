const joi = require('joi');

// Schema to validate the data received of the user
const createEventSchema = joi.object({
  name: joi.string().min(3).max(100).required(),
  url: joi.string().uri().required(),
  day: joi.date().timestamp().required(),
  template: joi.number().required(),
  user_id: joi.number(),
  organization_id: joi.number(),
});

module.exports = {
  createEventSchema,
};
