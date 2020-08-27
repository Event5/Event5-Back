const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const UsersService = require('../services/user');
const validationHandler = require('../utils/middleware/validationHandler');
const config = require('../config/config');

const { createUserSchema } = require('../utils/schemas/user');

// Basic strategy
require('../utils/auth/strategies/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);

  // User logic
  const usersService = new UsersService();

  // sing-in route
  router.post('/sign-in', async function (req, res, next) {
    passport.authenticate('basic', function (error, user) {
      try {
        if (error || !user) {
          next(boom.unauthorized());
        }
        // Request login
        req.login(user, { session: false }, async function (error) {
          if (error) {
            next(error);
          }

          const { id, username, email, type_user } = user;

          const payload = {
            id,
            username,
            email,
            type_user,
          };
          // Create json web token with the payload data
          const token = jwt.sign(payload, config.auth_jwt_secret, {
            expiresIn: '24h',
          });
          // Response
          return res
            .status(200)
            .json({ token, user: { id, username, email, type_user } });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

  // sign-up route
  router.post('/sign-up', validationHandler(createUserSchema), async function (
    req,
    res,
    next
  ) {
    const { body: user } = req;

    try {
      const userExists = await usersService.getUser(user.email);

      // If user already exists, don't create another one
      if (!userExists.detail) {
        next(boom.unauthorized('User already exists'));
      } else {
        // Store user in the DB and return user id
        const createdUser = await usersService.createUser(user);
        // Response
        await res.status(201).json({
          data: createdUser,
          message: 'user created',
        });
      }
    } catch (error) {
      next(error);
    }
  });
}

module.exports = authApi;
