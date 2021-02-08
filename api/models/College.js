const { Sequelize } = require('sequelize');
const db = require('../db')
const CollegeConference = require('CollegeConference')

module.exports = db.connection.define('College',
	{
		id: {
			field: 'CollegeId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		Name: {
			field: 'CollegeName',
			type: Sequelize.STRING
		},
		Abbreviation: {
			field: 'Abbreviation',
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)


