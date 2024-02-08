const { Schema } = require('mongoose');

const Category = new Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
  },
  priority: {
    type: Number,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

module.exports = Category;
