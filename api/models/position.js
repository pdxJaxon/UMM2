const { Sequelize } = require('sequelize');
const db = require('../db')


Team = db.connection.define('position',
	{
		abbreviation: {
			field: 'abbreviation',
			type: Sequelize.STRING,
			allowNull: false,
			primaryKey: true
		},
		name: {
			field: 'name',
			type: Sequelize.STRING,
			allowNull: false
		},
		positionPriority: {
			field: 'positionPriority',
			type: Sequelize.INTEGER,
			allowNull: false
		}
	},
	{
		freezeTableName: true
	}
)




module.exports = Team;


