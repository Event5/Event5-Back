const joi = require('joi');

// Schema to validate the data received of the user
const createScheduleSchema = joi.object({
  title: joi.string().min(3).max(100).required(),
  description: joi.string(),
  speaker: joi.string(),
  date_time: joi.date(),
  event_id: joi.number(),
});

module.exports = {
  createScheduleSchema,
};
