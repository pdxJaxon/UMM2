const { Sequelize } = require('sequelize');
const db = require('../db')

School = db.connection.define('school',
	{
		Id: {
			field: 'schoolId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		abbreviation: {
			field: 'abbreviation',
			type: Sequelize.STRING
		},
		name: {
			field: 'name',
			type: Sequelize.STRING
		},
		mascot: {
			field: 'mascot'
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)






module.export = School


