require('dotenv').config();
const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');

const UserServices = require('../../../services/user');
const config = require('../../../config/config');

passport.use(
  new Strategy(
    {
      secretOrKey: process.env.AUTH_JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (tokenPayload, cb) {
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
    }
  )
);
