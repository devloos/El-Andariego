const { Schema } = require('mongoose');

const Application = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  event_type: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
  },
});

module.exports = Application;
