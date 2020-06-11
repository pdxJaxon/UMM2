const { Sequelize } = require('sequelize');
const db = require('../db')
const Position = require('Position')
const College = require('College')

module.exports = db.connection.define('prospect',
	{
		id: {
			field: 'prospectId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		firstName: {
			field: 'fName',
			type: Sequelize.STRING
		},
		lastName: {
			field: 'lName',
			type: Sequelize.STRING
		},
		Year: {
			field: 'Year',
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)

prospect.HasOne(Position)
prospect.BelongsTo(College)

