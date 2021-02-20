const { Sequelize } = require('sequelize');
const db = require('../db')



Team = db.connection.define('team',
	{
		Id: {
			field: 'Id',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		abbreviation: {
			field: 'abbreviation',
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







module.exports = Team;


