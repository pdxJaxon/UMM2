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
			type: Sequelize.INTEGER
		}
	},
	{
		freezeTableName: true
	}
)


picks = [
	{pickId:1, roundId: 1, pickNumber:1, teamId:'JAX'},
	{pickId:2, roundId: 1, pickNumber:2,, teamId:'NYJ'},
	{pickId:3, roundId: 1, pickNumber:3 teamId:'CIN'},
	{pickId:4, roundId: 1, pickNumber:4, teamId:'ATL'},
	{pickId:5, roundId: 1, pickNumber:5, teamId:'CAR'},
	{pickId:6, roundId: 1, pickNumber:6, teamId:'MIA'},
	{pickId:7, roundId: 1, pickNumber:7, teamId:'PHI'},
	{pickId:8, roundId: 1, pickNumber:8, teamId:'LAC'},
	{pickId:9, roundId: 1, pickNumber:9, teamId:'DAL'},
	{pickId:10, roundId: 1, pickNumber:10, teamId:'NYG'},
	{pickId:11, roundId: 1, pickNumber:11, teamId:'DET'},
	{pickId:12, roundId: 1, pickNumber:12, teamId:'SF'},
	{pickId:13, roundId: 1, pickNumber:13, teamId:'DEN'},
	{pickId:14, roundId: 1, pickNumber:14, teamId:'MIN'},
	{pickId:15, roundId: 1, pickNumber:15, teamId:'NE'},
	{pickId:16, roundId: 1, pickNumber:16, teamId:'CHI'},
	{pickId:17, roundId: 1, pickNumber:17, teamId:'LV'},
	{pickId:18, roundId: 1, pickNumber:18, teamId:'BAL'},
	{pickId:19, roundId: 1, pickNumber:19, teamId:'WAS'},
	{pickId:20, roundId: 1, pickNumber:20, teamId:'ARI'},
	{pickId:21, roundId: 1, pickNumber:21, teamId:'MIA'},
	{pickId:22, roundId: 1, pickNumber:22, teamId:'JAX'},
	{pickId:23, roundId: 1, pickNumber:23, teamId:'TB'},
	{pickId:24, roundId: 1, pickNumber:24, teamId:'NYJ'},
	{pickId:25, roundId: 1, pickNumber:25, teamId:'IND'},
	{pickId:26, roundId: 1, pickNumber:26, teamId:'CLE'},
	{pickId:27, roundId: 1, pickNumber:27, teamId:'NO'},
	{pickId:28, roundId: 1, pickNumber:28, teamId:'TEN'},
	{pickId:29, roundId: 1, pickNumber:29, teamId:'GB'},
	{pickId:30, roundId: 1, pickNumber:30, teamId:'PIT'},
	{pickId:31, roundId: 1, pickNumber:31, teamId:'BUF'},
	{pickId:32, roundId: 1, pickNumber:32, teamId:'KC'}
	

	
	
];

Pick.bulkCreate(picks,{validate:true}).then(()=>{
	console.log('picks created')
});

module.exports = Pick;


