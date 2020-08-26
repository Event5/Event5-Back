const joi = require('joi');

// Schema to validate the data received of the user
const createOrganizationSchema = joi.object({
  name: joi.string().required(),
  url: joi.string().required(),
});

module.exports = {
  createOrganizationSchema,
};
