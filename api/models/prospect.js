const { Sequelize } = require('sequelize');

const db = require('../db');

const Position = require('../models/position');

Prospect = db.connection.define('prospect',
	{
		Id: {
			field: 'prospectId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		fname: {
			field: 'FName',
			type: Sequelize.STRING
		},
		lname: {
			field: 'LName',
			type: Sequelize.STRING
		},
		positionId: {
			field: 'positionId',
			type: Sequelize.STRING,
			references: {
				model:'Position',
				key: 'Id'
			}
		},
		height: {
			field: 'Height',
			type: Sequelize.STRING
		},
		weight: {
			field: 'Weight',
			type: Sequelize.STRING
		},
		year: {
			field: 'Year',
			type: Sequelize.STRING
		},
		schoolId: {
			field: 'SchoolId',
			type: Sequelize.INTEGER
		}
	},
	{
		freezeTableName: true
	}
)







module.exports = Prospect



