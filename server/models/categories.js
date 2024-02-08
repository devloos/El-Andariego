const { model } = require('mongoose');
const Category = require('../schema/category');

const Categories = model('Categories', Category, 'categories');

module.exports = Categories;
