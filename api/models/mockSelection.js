const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('MockSelection',
	{
		Id: {
			field: 'Id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		pickId: {
			field: 'pickId',
			type: DataTypes.INTEGER
		},
		prospectId: {
			field: 'prospectId',
			type: DataTypes.INTEGER
		}
	},
	{
		freezeTableName: true
	}
)	
	

};