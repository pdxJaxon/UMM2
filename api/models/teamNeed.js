const { Sequelize } = require('sequelize');
const db = require('../db')



TeamNeed = db.connection.define('teamNeed',
	{
		teamNeedId: {
			field: 'teamNeedId',
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoincrement: true
		},
		teamId: {
			field: 'teamId',
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				Model: 'Team',
				Key: 'teamId'
			}
		},
		positionId: {
			field: 'positionId',
			type: Sequelize.STRING,
			allowNull: false,
			references: {
				Model: 'Position',
				Key: 'abbreviation'
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