const express = require('express');
const app = express();

const config = require('./config/config');
const authApi = require('./routes/auth');
const organizationApi = require('./routes/organization');
const eventApi = require('./routes/event');
const organizerApi = require('./routes/organizer');
const eventDataApi = require('./routes/eventData');
const scheduleApi = require('./routes/schedule');
const speakerApi = require('./routes/speaker');
const registryApi = require('./routes/registry');
const associateApi = require('./routes/associate');
const emailApi = require('./routes/email');
const getDataApi = require('./routes/getData');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
authApi(app);
organizationApi(app);
eventApi(app);
organizerApi(app);
eventDataApi(app);
scheduleApi(app);
speakerApi(app);
associateApi(app);
registryApi(app);
emailApi(app);
getDataApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening at http://localhost:${config.port}`);
});
