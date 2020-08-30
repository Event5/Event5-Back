const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');

const UserServices = require('../../../services/user');
const config = require('../../../config/config');
const keys = require('./keys');

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

passport.use(
  new Strategy(opts, async function (tokenPayload, cb) {
    const usersService = new UserServices();

    try {
      if (config.dev && tokenPayload.email === 'peter@gmail.com') {
        cb(null, config.tests.user);
      } else {
        const user = await usersService.getUser(tokenPayload.email);
        if (!user) {
          return cb(boom.unauthorized(), false);
        }
        delete user.password;
        cb(null, { ...user });
      }
    } catch (error) {
      return cb(error);
    }
  })
);
