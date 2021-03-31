const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('round',
	{
		Id: {
			field: 'Id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: false
		},
		draftId: {
			field: 'draftId',
			type: DataTypes.INTEGER,
			references:{
				model:'Draft',
				key:'Id'
			}
		}
	},
	{
		freezeTableName: true
	}
)

};

