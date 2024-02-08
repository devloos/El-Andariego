const { Schema, Types } = require('mongoose');

const Item = new Schema({
  name: {
    type: Object,
    required: true,
  },
  content: {
    type: Object,
  },
  base_price: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
  },
  images: {
    type: Array,
  },
  priority: {
    type: Number,
    required: true,
  },
  category_id: {
    type: Types.ObjectId,
  },
});

module.exports = Item;
