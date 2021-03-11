const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('collegeConference',
	{
		collegeConferenceId: {
			field: 'collegeConferenceId',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		conferenceName: {
			field: 'ConferenceName',
			type: DataTypes.STRING
		},
		ConferenceAbbreviation: {
			field: 'ConferenceAbbreviation',
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true
	}
)
};