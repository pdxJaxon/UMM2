const { Sequelize } = require('sequelize');
const db = require('../db')

//Example: Pac-12, BigSky, SEC, etc
module.exports = db.connection.define('collegeConference',
	{
		collegeConferenceId: {
			field: 'collegeConferenceId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		conferenceName: {
			field: 'ConferenceName',
			type: Sequelize.STRING
		},
		ConferenceAbbreviation: {
			field: 'ConferenceAbbreviation',
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)
