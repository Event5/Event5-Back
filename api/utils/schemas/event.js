const joi = require('joi');

// Schema to validate the data received of the user
const createEventSchema = joi.object({
  name: joi.string().min(3).max(100).required(),
  url: joi.string().uri().required(),
  day: joi.date().timestamp().required(),
  template: joi.string().required(),
  organization_id: joi.number(),
});

module.exports = {
  createEventSchema,
};
