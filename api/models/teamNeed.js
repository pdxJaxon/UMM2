const {  DataTypes  } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('teamNeed',
	{
		Id: {
			field: 'Id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		teamId: {
			field:'teamId',
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'team',
				key: 'Id'
			}
		},
		positionId: {
			field: 'positionId',
			type: DataTypes.STRING,
			references: {
				model: 'position',
				key: 'Id'
			}
		},
		needScore: {
			field: 'needScore',
			type: DataTypes.INTEGER
		}
		
	},
	{
		freezeTableName: true
	}
)


};







