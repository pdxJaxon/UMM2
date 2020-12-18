const { Sequelize } = require('sequelize');
const db = require('../db');
const position = require('position');

Prospect = db.connection.define('prospect',
	{
		prospectId: {
			field: 'prospectId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		FName: {
			field: 'abbreviation',
			type: Sequelize.STRING
		},
		LName: {
			field: 'city',
			type: Sequelize.STRING
		},
		Age: {
			field: 'nickname',
			type: Sequelize.STRING
		}
		Height: {
			field: 'Height'
			type: Sequelize.STRING
		},
		Weight: {
			field: 'Weight'
			type: Sequelize.STRING
		},
		Arms: {
			field: 'Arms'
			type: Sequelize.STRING
		},
		Hands: {
			field: 'Hands'
			type: Sequelize.STRING
		},
		Year: {
			field: 'Year'
			type: Sequelize.STRING
		},
		SparqScore: {
			field: 'SparqScore'
			type: Sequelize.NUMBER
		},
		UMMScore: {
			field: 'UMMScore'
			type: Sequelize.NUMBER
		},
		NFLGrade: {
			field: 'NFLGrade'
			type: Sequelize.NUMBER
		}
	},
	{
		freezeTableName: true
	}
)

Prospect.belongsTo(position)
module.exports = Prospect



