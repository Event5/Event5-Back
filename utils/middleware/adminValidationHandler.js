const boom = require('@hapi/boom');

function adminValidationHandler() {
  return function (req, res, next) {
    if (!req.user) {
      next(boom.unauthorized('Missing User'));
    }

    if (req.user.type_user === 'admin') {
      next();
    } else {
      next(boom.unauthorized('Sorry! Only Admins can do this'));
    }
  };
}

module.exports = adminValidationHandler;
