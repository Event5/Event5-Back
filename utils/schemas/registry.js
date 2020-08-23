const joi = require('joi');

// Schema to validate the data received of the user
const createRegistrySchema = joi.object({
  email: joi.string().email().required(),
  event_id: joi.number().required(),
});

module.exports = {
  createRegistrySchema,
};
