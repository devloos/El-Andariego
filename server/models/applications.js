const { model } = require('mongoose');
const Application = require('../schema/application');

const Applications = model('Applications', Application, 'send-grid');

module.exports = Applications;
