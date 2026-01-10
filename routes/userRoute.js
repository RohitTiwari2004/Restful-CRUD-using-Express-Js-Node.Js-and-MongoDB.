const express = require('express');
const {
  fetch,
  create,
  update,
  deleteUser,
} = require('../controller/userController.js');

const route = express.Router();
route.post('/create', create);
route.get('/getAllUsers', fetch);
route.put('/update/:id', update);
route.delete('/delete/:id', deleteUser);
module.exports = route;
