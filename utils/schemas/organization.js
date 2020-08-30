const joi = require('joi');

// Schema to validate the data received of the user
const createOrganizationSchema = joi.object({
  id: joi.number(),
  name: joi.string().required(),
  url: joi.string().required(),
  user_id: joi.number().required(),
});

module.exports = {
  createOrganizationSchema,
};
