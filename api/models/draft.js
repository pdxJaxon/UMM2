const { Sequelize } = require('sequelize');
const db = require('../db');

//Each Session will have its own DRAFT
//If a DRAFT Record has no sessionID, it is assumed our "Primary"
Draft = db.connection.define('draft',
	{
		draftId: {
			field: 'draftId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		}
	},
	{
		freezeTableName: true
	}
)



module.exports = Draft;


