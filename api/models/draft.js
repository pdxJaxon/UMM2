const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('draft',
	{
		Id: {
			field: 'Id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: false
		}
	},
	{
		freezeTableName: true
	}
)

};


