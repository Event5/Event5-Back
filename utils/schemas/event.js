const joi = require('joi');

// Schema to validate the data received of the user
const createEventSchema = joi.object({
  id: joi.number(),
  event_name: joi.string().min(3).max(100).required(),
  url: joi.string().required(),
  event_start_date: joi.date(),
  template: joi.number().required(),
  users: joi.array().items(joi.number()),
  organization_id: joi.number().required(),
  published: joi.bool(),
});

module.exports = {
  createEventSchema,
};
