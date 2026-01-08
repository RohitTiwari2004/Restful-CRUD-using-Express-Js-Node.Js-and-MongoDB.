const express = require('express');
const { fetch } = require('../controller/userController.js');

const route = express.Router();
route.get('/fetch', fetch);

module.exports = route;
