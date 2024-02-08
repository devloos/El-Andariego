const { model } = require('mongoose');
const Item = require('../schema/item');

const Items = model('Items', Item, 'items');

module.exports = Items;
