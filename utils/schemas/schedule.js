const joi = require('joi');

// Schema to validate the data received of the user
const createScheduleSchema = joi.object({
  id: joi.number(),
  title: joi.string().min(3).max(100).required(),
  description: joi.string(),
  speaker: joi.string(),
  date_time: joi.string(),
  event_id: joi.number().required(),
});

module.exports = {
  createScheduleSchema,
};
