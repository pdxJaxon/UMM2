const sequelize = require('../../db/sequelize')
const {Sequelize, Model, DataTypes} = require('sequelize');


module.exports = sequelize.define('team',{
	id: {
		field: 'teamId',
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoincrement: true
	},
	Abbreviation: {
		field: 'abbr',
		type: Sequelize.STRING
	},
	City: {
		field: 'city',
		type: Sequelize.STRING
	},
	Nickname: {
		field: 'nickname',
		type: Sequelize.STRING
	}
	},
	{
	
  	freezeTableName: true,
  	timestamps: false,
  	// define the table's name
  	tableName: 'team'
  }
)