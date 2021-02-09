const { Sequelize } = require('sequelize');
const db = require('../db')

const Draft = require('../models/draft');


Round = db.connection.define('round',
	{
		roundId: {
			field: 'roundId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		draftId: {
			field: 'draftId',
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'Draft',
				key: 'draftId'
			}
		}
	},
	{
		freezeTableName: true
	}
)




module.exports = Round;

