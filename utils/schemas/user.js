const joi = require('joi');

const userIdSchema = joi.number();

// Schema to validate the data received of the user
const createUserSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  type_user: joi.string().pattern(new RegExp('admin|organizer')).required(),
  user_status: joi.string().pattern(new RegExp('active|disabled')).required(),
});

module.exports = {
  userIdSchema,
  createUserSchema,
};
