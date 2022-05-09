const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//const Balance = require('../models/balance');
const User = require('../modules/accounts/entities/user')

const connection = new Sequelize(dbConfig);

//Balance.init(connection);
User.init(connection)

module.exports = connection;