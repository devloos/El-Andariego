const { Schema } = require('mongoose');

const Post = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    index: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: Object,
    required: true,
  },
  images: {
    type: Array,
  },
});

module.exports = Post;
