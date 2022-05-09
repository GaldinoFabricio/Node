const express = require('express');

const routes = express.Router();

const userRoutes = require('./users.routes');

routes.use(userRoutes);

module.exports = routes;