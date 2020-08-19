const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('../../../services/users');

passport.use(
  new BasicStrategy(async function (email, password, cb) {
    const userService = new UserService();

    try {
      const user = await userService.getUser(email);

      if (!user) {
        return cb(boom.unauthorized(), false);
      }

      // TODO remove when signup is working.
      const passHashed = await bcrypt.hashSync(user[0].password, 5);

      if (!(await bcrypt.compare(password, passHashed))) {
        return cb(boom.unauthorized(), false);
      }

      return cb(null, user[0]);
    } catch (err) {
      return cb(error);
    }
  })
);
