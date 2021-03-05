const { Sequelize } = require('sequelize');
const db = require('../db');


Mock = db.connection.define('mock',
	{
		Id: {
			field: 'mockId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		userId: {
			field: 'userId',
			type: Sequelize.INTEGER
		},
		sessionId: {
			field: 'sessionId',
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)	
	



module.exports = Mock;


