const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('mock',
	{
		Id: {
			field: 'Id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		userId: {
			field: 'userId',
			type: DataTypes.INTEGER
		},
		sessionId: {
			field: 'sessionId',
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true
	}
)	
	

};


