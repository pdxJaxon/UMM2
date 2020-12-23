const { Sequelize } = require('sequelize');
const db = require('../db')
const Unit = require(Unit)

//example: Tightend - TE
module.exports = db.connection.define('Position',
	{
		id: {
			field: 'positionId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		positionName: {
			field: 'positionName',
			type: Sequelize.STRING
		},
		positionAbbreviation: {
			field: 'positionAbbreviation',
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)

Position.belongsTo(Unit)
