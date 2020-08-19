const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const UsersService = require('../services/users');
const validationHandler = require('../utils/middleware/validationHandler');
const config = require('../config/config');

const { createUserSchema } = require('../utils/schemas/users');

// Basic strategy
require('../utils/auth/strategies/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);

  const usersService = new UsersService();

  router.post('/sign-in', async function (req, res, next) {
    passport.authenticate('basic', function (error, user) {
      try {
        if (error || !user) {
          next(boom.unauthorized());
        }

        req.login(user, { session: false }, async function (error) {
          if (error) {
            next(error);
          }

          const { id, username, email, type } = user;

          const payload = {
            id,
            username,
            email,
            type,
          };

          const token = jwt.sign(payload, config.auth_jwt_secret, {
            expiresIn: '15m',
          });

          return res.status(200).json({ token, user: { id, username, email } });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

  // TODO sign-up
  
  // router.post('/sign-up', validationHandler(createUserSchema), async function(req, res, next) {
  //   const { body: user } = req;

  //   try {
  //     const createdUserId = await usersService.createUser({ user });
  //     res.status(201)
  //   } catch(error) {

  //   }
  // })
}

module.exports = authApi;
