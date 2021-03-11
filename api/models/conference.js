const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('Conference',
	{
		id: {
			field: 'conferenceId',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		abbreviation: {
			field: 'abbreviation',
			type: DataTypes.STRING
		},
		name: {
			field: 'name',
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true
	}
)

};
