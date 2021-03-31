const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('Conference',
	{
		id: {
			field: 'conferenceId',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
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
