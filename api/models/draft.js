const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('draft',
	{
		Id: {
			field: 'Id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: false
		}
	},
	{
		freezeTableName: true
	}
)

};


