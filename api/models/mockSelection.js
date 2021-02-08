const { Sequelize } = require('sequelize');
const db = require('../db');


MockSelection = db.connection.define('mockSelection',
	{
		mockId: {
			field: 'mockId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		pickId: {
			field: 'pickId',
			type: Sequelize.INTEGER
		},
		prospectId: {
			field: 'prospectId',
			type: Sequelize.INTEGER
		}
	},
	{
		freezeTableName: true
	}
)	
	



module.exports = MockSelection;