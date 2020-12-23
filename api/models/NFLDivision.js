const { Sequelize } = require('sequelize');
const db = require('../db')
const NFLConference = require('../models/NFLConference')

//Example: AFC North, NFC East
module.exports = db.connection.define('NFLDivision',
	{
		NFLDivisionId: {
			field: 'NFLDivisionId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		NFLDivisionName: {
			field: 'NFLDivisionName',
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)


