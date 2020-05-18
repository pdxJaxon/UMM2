const {Sequelize} = require('sequelize');
exports.connection = new Sequelize('sqlite:UMM.db');
