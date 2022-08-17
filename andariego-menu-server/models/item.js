const { Schema, model } = require('mongoose');

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const Item = model('Items', ItemSchema, 'items');
module.exports = Item;
