const { Sequelize } = require('sequelize');
const db = require('../db');
const prospect = require('prospect');

Position = db.connection.define('position',
	{
		id: {
			field: 'positionId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		abbreviation: {
			field: 'abbreviation',
			type: Sequelize.STRING
		},
		name: {
			field: 'name',
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true

	}
)

Position.hasMany(prospect,{as: 'Prospects'})

module.exports = Position


