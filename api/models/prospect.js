const { Sequelize } = require('sequelize');

const db = require('../db');
const position = require('../models/position');


Prospect = db.connection.define('prospect',
	{
		prospectId: {
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
		height: {
			field: 'Height',
			type: Sequelize.STRING
		},
		weight: {
			field: 'Weight',
			type: Sequelize.STRING
		},
		positionId: {
			field: 'PositionId',
			type: Sequelize.INTEGER
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





console.log('prospects created')




module.exports = Prospect



