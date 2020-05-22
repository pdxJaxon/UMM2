const {Sequelize} = require('sequelize');
const dbConn = new Sequelize('sqlite:UMM.db');

exports.connection = dbConn;
