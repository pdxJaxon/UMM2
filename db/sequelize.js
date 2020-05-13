const {Sequelize, Model, DataTypes} = require('sequelize');


//in memory db for testing
module.exports = new Sequelize('sqlite::memory:');
