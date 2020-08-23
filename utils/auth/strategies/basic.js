const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('../../../services/user');

passport.use(
  new BasicStrategy(async function (email, password, cb) {
    // user logic
    const userService = new UserService();

    try {
      // find if user is on the DB and return it
      const user = await userService.getUser(email);

      // if no user return error unauthorized
      if (!user) {
        return cb(boom.unauthorized(), false);
      }

      // Check if passed password matches the password that is stored in the DB.
      if (!(await bcrypt.compare(password, user.password))) {
        return cb(boom.unauthorized(), false);
      }

      return cb(null, user);
    } catch (error) {
      return cb(error);
    }
  })
);
