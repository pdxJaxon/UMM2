const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('Round',
	{
		Id: {
			field: 'Id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: false
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

