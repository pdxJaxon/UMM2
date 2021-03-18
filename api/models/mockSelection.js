const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('mockSelection',
	{
		Id: {
			field: 'Id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		mockId: {
			field: 'mockId',
			type: DataTypes.INTEGER,
			references: {
				model: 'mock',
				key: 'Id'
			}
		},
		pickId: {
			field: 'pickId',
			type: DataTypes.INTEGER,
			references: {
				model: 'pick',
				key: 'Id'
			}
		},
		prospectId: {
			field: 'prospectId',
			type: DataTypes.INTEGER,
			references: {
				model: 'prospect',
				key: 'Id'
			}
		}
	},
	{
		freezeTableName: true
	}
)	
	

};