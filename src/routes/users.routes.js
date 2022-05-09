const express = require('express');
const CreateUserController = require('../modules/accounts/useCase/createUser/createUserController');

const userRoutes = express.Router();

const createUserController = new CreateUserController();

userRoutes.post('/create', createUserController.handle)

module.exports = userRoutes;