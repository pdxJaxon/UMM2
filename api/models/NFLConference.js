const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('NFLConference',
	{
		Id: {
			field: 'Id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		NFLConferenceName: {
			field: 'NFLConferenceName',
			type: DataTypes.STRING
		},
		NFLConferenceAbbreviation: {
			field: 'NFLConferenceAbbreviation',
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true
	}
)

};