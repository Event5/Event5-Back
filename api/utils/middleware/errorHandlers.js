const boom = require('@hapi/boom');
const config = require('../../config/config');

// Check if its on development tor return the error.
function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }

  return error;
}

// Log error into the console
function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

// If error is a boom error
function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
}

// Handle error with status and the error
function errorHandler(err, req, res, next) {
  // eslint-disable-line
  const {
    output: { statusCode, payload },
  } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler,
};
