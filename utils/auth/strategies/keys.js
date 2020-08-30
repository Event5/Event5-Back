const config = require('../../../config/config');

module.exports = {
  secretOrKey: config.auth_jwt_secret,
};
