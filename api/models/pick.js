const { Sequelize } = require('sequelize');
const db = require('../db');
const Prospect = require('../models/prospect');
const Team = require('../models/team');
const Round = require('../models/round');

Pick = db.connection.define('pick',
	{
		pickId: {
			field: 'pickId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		roundId: {
			field: 'roundId',
			type: Sequelize.INTEGER
		},
		pickNumber: {
			field: 'pickNumber',
			type: Sequelize.INTEGER
		},
		teamId: {
			field: 'teamId',
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)



console.log('picks created')


module.exports = Pick;


