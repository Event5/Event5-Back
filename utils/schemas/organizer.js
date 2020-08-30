const joi = require('joi');

// Schema to validate the data received of the user
const createOrganizerSchema = joi.object({
  id: joi.number(),
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  event_id: joi.number().required(),
});

module.exports = {
  createOrganizerSchema,
};
