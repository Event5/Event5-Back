const joi = require('@hapi/joi');

const userIdSchema = joi.number();

const createUserSchema = {
  username: joi.string().max(100).required(),
  email: joi.string().email().required(),
  password: joi.string().required,
  isAdmin: joi.boolean(),
};

module.exports = {
  userIdSchema,
  createUserSchema,
};
