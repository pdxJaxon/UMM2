const { Sequelize } = require('sequelize');
const db = require('../db');
const Prospect = require('../models/prospect');
const Team = require('../models/team');
const Round = require('../models/round');

Team = db.connection.define('pick',
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
		},
		prospectId: {
			field: 'prospectId',
			type: Sequelize.INTEGER
		},
	},
	{
		freezeTableName: true
	}
)


picks = [
	{pickId:1, roundId: 1, pickNumber:1, teamId:'JAX',prospectId:},
	{pickId:2, roundId: 1, pickNumber:2,, teamId:'NYJ',prospectId:},
	{pickId:3, roundId: 1, pickNumber:3 teamId:'CIN',prospectId:},
	{pickId:4, roundId: 1, pickNumber:4, teamId:'ATL',prospectId:},
	{pickId:5, roundId: 1, pickNumber:5, teamId:'CAR',prospectId:},
	{pickId:6, roundId: 1, pickNumber:6, teamId:'MIA',prospectId:},
	{pickId:7, roundId: 1, pickNumber:7, teamId:'PHI',prospectId:},
	{pickId:8, roundId: 1, pickNumber:8, teamId:'LAC',prospectId:},
	{pickId:9, roundId: 1, pickNumber:9, teamId:'DAL',prospectId:},
	{pickId:10, roundId: 1, pickNumber:10, teamId:'NYG',prospectId:},
	{pickId:11, roundId: 1, pickNumber:11, teamId:'DET',prospectId:},
	{pickId:12, roundId: 1, pickNumber:12, teamId:'SF',prospectId:},
	{pickId:13, roundId: 1, pickNumber:13, teamId:'DEN',prospectId:},
	{pickId:14, roundId: 1, pickNumber:14, teamId:'MIN',prospectId:},
	{pickId:15, roundId: 1, pickNumber:15, teamId:'NE',prospectId:},
	{pickId:16, roundId: 1, pickNumber:16, teamId:'CHI',prospectId:},
	{pickId:17, roundId: 1, pickNumber:17, teamId:'LV',prospectId:},
	{pickId:18, roundId: 1, pickNumber:18, teamId:'BAL',prospectId:},
	{pickId:19, roundId: 1, pickNumber:19, teamId:'WAS',prospectId:},
	{pickId:20, roundId: 1, pickNumber:20, teamId:'ARI',prospectId:},
	{pickId:21, roundId: 1, pickNumber:21, teamId:'MIA',prospectId:},
	{pickId:22, roundId: 1, pickNumber:22, teamId:'JAX',prospectId:},
	{pickId:23, roundId: 1, pickNumber:23, teamId:'TB',prospectId:},
	{pickId:24, roundId: 1, pickNumber:24, teamId:'NYJ',prospectId:},
	{pickId:25, roundId: 1, pickNumber:25, teamId:'IND',prospectId:},
	{pickId:26, roundId: 1, pickNumber:26, teamId:'CLE',prospectId:},
	{pickId:27, roundId: 1, pickNumber:27, teamId:'NO',prospectId:},
	{pickId:28, roundId: 1, pickNumber:28, teamId:'TEN',prospectId:},
	{pickId:29, roundId: 1, pickNumber:29, teamId:'GB',prospectId:},
	{pickId:30, roundId: 1, pickNumber:30, teamId:'PIT',prospectId:},
	{pickId:31, roundId: 1, pickNumber:31, teamId:'BUF',prospectId:},
	{pickId:32, roundId: 1, pickNumber:32, teamId:'KC',prospectId:}
	

	
	
];

Pick.bulkCreate(picks,{validate:true}).then(()=>{
	console.log('teams created')
});

module.exports = Team;


