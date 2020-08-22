const express = require('express');
const app = express();

const config = require('./config/config');
const authApi = require('./routes/auth');
const eventApi = require('./routes/event');
const eventDataApi = require('./routes/eventData');
const scheduleApi = require('./routes/schedule');

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
eventApi(app);
eventDataApi(app);
scheduleApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening at http://localhost:${config.port}`);
});
