const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('position',
	{
		Id: {
			field: 'Id',
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		name: {
			field: 'name',
			type: DataTypes.STRING,
			allowNull: false
		},
		positionPriority: {
			field: 'positionPriority',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		freezeTableName: true
	}
)

};


