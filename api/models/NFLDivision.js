const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('team',
	{
		Id: {
			field: 'Id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		NFLDivisionName: {
			field: 'NFLDivisionName',
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true
	}
)

};
