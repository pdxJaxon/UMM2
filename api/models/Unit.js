const {  DataTypes  } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('unit',
	{
		id: {
			field: 'unitId',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		unitName: {
			field: 'unitName',
			type: DataTypes.STRING
		},
		unitAbbreviation: {
			field: 'unitAbbreviation',
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true
	}
)
};