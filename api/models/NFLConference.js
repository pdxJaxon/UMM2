const { Sequelize } = require('sequelize');
const db = require('../db')

//Example: American Football Conference AFC
module.exports = db.connection.define('NFLConference',
	{
		Id: {
			field: 'Id',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		NFLConferenceName: {
			field: 'NFLConferenceName',
			type: Sequelize.STRING
		},
		NFLConferenceAbbreviation: {
			field: 'NFLConferenceAbbreviation',
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)
