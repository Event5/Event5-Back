const joi = require('joi');

// Schema to validate the data received of the user
const createAssociateSchema = joi.object({
  name: joi.string().min(3).max(100).required(),
  url: joi.string().uri(),
  logo_url: joi.string().uri(),
  relevance: joi.boolean(),
  event_id: joi.number().required(),
});

module.exports = {
  createAssociateSchema,
};
