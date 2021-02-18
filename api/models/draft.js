const { Sequelize } = require('sequelize');
const db = require('../db');

const Round = require('../models/round');

//Each Session will have its own DRAFT
//If a DRAFT Record has no sessionID, it is assumed our "Primary"
Draft = db.connection.define('draft',
	{
		Id: {
			field: 'Id',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		}
	},
	{
		freezeTableName: true
	}
)

Draft.hasMany(Round);
Round.belongsTo(Draft);

module.exports = Draft;


