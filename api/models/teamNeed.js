const { Sequelize } = require('sequelize');
const db = require('../db')




TeamNeed = db.connection.define('teamNeed',
	{
		Id: {
			field: 'Id',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		teamId: {
			field:'teamId',
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'team',
				key: 'Id'
			}
		},
		positionId: {
			field: 'positionId',
			type: Sequelize.STRING,
			references: {
				model: 'position',
				key: 'Id'
			}
		},
		needScore: {
			field: 'needScore',
			type: Sequelize.INTEGER
		}
		
	},
	{
		freezeTableName: true
	}
)




module.exports = TeamNeed