const express = require('express');
const app = express();

const config = require('./config/config');
const authApi = require('./routes/auth');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());

// routes
authApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// TODO add Error Handlers

app.listen(config.port, () => {
  console.log(`Listening at http://localhost:${config.port}`);
});
