const { Sequelize } = require('sequelize');
const db = require('../db')

module.exports = db.connection.define('team',
	{
		id: {
			field: 'teamId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		abbreviation: {
			field: 'abbr',
			type: Sequelize.STRING
		},
		city: {
			field: 'city',
			type: Sequelize.STRING
		},
		nickname: {
			field: 'nickname',
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)
