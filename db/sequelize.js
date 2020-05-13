const {Sequelize, Model, DataTypes} = require('sequelize');


//SQLite
module.exports = new Sequelize('sqlite:UMM.db');
