const { Sequelize } = require('sequelize');
const db = require('../db')

//example: Offense, Defense, or Special Teams
module.exports = db.connection.define('unit',
	{
		id: {
			field: 'unitId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		unitName: {
			field: 'unitName',
			type: Sequelize.STRING
		},
		unitAbbreviation: {
			field: 'unitAbbreviation',
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)
