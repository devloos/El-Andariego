const { model } = require('mongoose');
const Post = require('../schema/post');

const Posts = model('Posts', Post, 'posts');

module.exports = Posts;
