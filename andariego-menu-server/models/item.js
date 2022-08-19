const { Schema, model } = require('mongoose');

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    index: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const Item = model('Items', ItemSchema, 'items');
module.exports = Item;
