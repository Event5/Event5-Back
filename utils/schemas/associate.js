const joi = require('joi');

// Schema to validate the data received of the user
const createAssociateSchema = joi.object({
  id: joi.number(),
  name: joi.string().min(3).max(100).required(),
  url: joi.string().uri(),
  logo_url: joi.any(),
  relevance: joi.boolean(),
  event_id: joi.array().items(joi.number()).required(),
});

module.exports = {
  createAssociateSchema,
};
