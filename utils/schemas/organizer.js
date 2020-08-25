const joi = require('joi');

// Schema to validate the data received of the user
const createOrganizerSchema = joi.object({
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  event_id: joi.number(),
});

module.exports = {
  createOrganizerSchema,
};
