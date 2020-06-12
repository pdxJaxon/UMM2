const { Sequelize } = require('sequelize');
const db = require('../db')
const NFLDivision = require('../models/NFLDivision')
const NFLConference = require('../models/NFLConference')

module.exports = db.connection.define('team',
	{
		teamId: {
			field: 'teamId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		abbreviation: {
			field: 'abbr',
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
NFLDivision.belongsTo(NFLConference,{
	foreignKey:'NFLConferenceId'
});

