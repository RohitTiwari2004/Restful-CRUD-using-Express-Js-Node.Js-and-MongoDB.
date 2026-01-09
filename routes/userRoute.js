const express = require('express');
const { fetch, create } = require('../controller/userController.js');

const route = express.Router();
route.post('/create', create);
route.get('/getAllUsers', fetch);

module.exports = route;
