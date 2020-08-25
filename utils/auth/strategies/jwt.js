const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');

const UserServices = require('../../../services/user');
const config = require('../../../config/config');

passport.use(
  new Strategy(
    {
      secretOrKey: config.auth_jwt_secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (tokenPayload, cb) {
      const usersService = new UserServices();

      try {
        const user = await usersService.getUser(tokenPayload.email);

        if (!user) {
          return cb(boom.unauthorized(), false);
        }

        delete user.password;

        cb(null, { ...user});
      } catch (error) {
        return cb(error);
      }
    }
  )
);
