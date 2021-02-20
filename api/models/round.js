const { Sequelize } = require('sequelize');
const db = require('../db')

const Draft = require('../models/draft');



Round = db.connection.define('round',
	{
		Id: {
			field: 'Id',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		draftId: {
			field: 'draftId',
			type: Sequelize.INTEGER,
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




module.exports = Round;

