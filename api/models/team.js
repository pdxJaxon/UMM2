const { Sequelize } = require('sequelize');
const db = require('../db')
const NFLDivision = require('../models/NFLDivision')
const NFLConference = require('../models/NFLConference')

Team = db.connection.define('team',
	{
		teamId: {
			field: 'teamId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		abbreviation: {
			field: 'abbreviation',
			type: Sequelize.STRING
		},
		city: {
			field: 'city',
			type: Sequelize.STRING
		},
		nickname: {
			field: 'nickname',
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)


teams = [
	{abbreviation: 'LA', city:'Los Angeles', nickname: 'Rams'},
	{abbreviation: 'SEA', city:'Seattle', nickname: 'Seahawks'},
	{abbreviation: 'AZ', city:'Arizona', nickname: 'Cardinals'},
	{abbreviation: 'SF', city:'San Francisco', nickname: '49ers'},
	{abbreviation: 'NO', city:'New Orleans', nickname: 'Saints'},
	{abbreviation: 'TB', city:'Tampa Bay', nickname: 'Buccaneersw'},
	{abbreviation: 'CAR', city:'Carolina', nickname: 'Panthers'},
	{abbreviation: 'ATL', city:'Atlanta', nickname: 'Falcons'},
	{abbreviation: 'PHI', city:'Philadelphia', nickname: 'Eagles'},
	{abbreviation: 'NYG', city:'New York', nickname: 'Giants'},
	{abbreviation: 'DAL', city:'Dallas', nickname: 'Cowboys'},
	{abbreviation: 'WAS', city:'Washington', nickname: 'Football Team'},
	{abbreviation: 'GB', city:'Green Bay', nickname: 'Packers'},
	{abbreviation: 'CHI', city:'Chicago', nickname: 'Bears'},
	{abbreviation: 'MIN', city:'Minnesota', nickname: 'Vikings'},
	{abbreviation: 'DET', city:'Detroit', nickname: 'Lions'},
	{abbreviation: 'BUF', city:'Buffalo', nickname: 'Bills'},
	{abbreviation: 'MIA', city:'Miami', nickname: 'Dolphins'},
	{abbreviation: 'NE', city:'New England', nickname: 'Patriots'},
	{abbreviation: 'NY', city:'New York', nickname: 'Jets'},
	{abbreviation: 'IND', city:'Indianapolis', nickname: 'Colts'},
	{abbreviation: 'TEN', city:'Tennessee', nickname: 'Titans'},
	{abbreviation: 'HOU', city:'Houston', nickname: 'Texans'},
	{abbreviation: 'JAX', city:'Jacksonville', nickname: 'Jaguars'},
	{abbreviation: 'PIT', city:'Pittsburgh', nickname: 'Steelers'},
	{abbreviation: 'CLE', city:'Cleveland', nickname: 'Browns'},
	{abbreviation: 'BAL', city:'Baltimore', nickname: 'Ravens'},
	{abbreviation: 'CIN', city:'Cincinnati', nickname: 'Bengals'},
	{abbreviation: 'KC', city:'Kansas City', nickname: 'Chiefs'},
	{abbreviation: 'LV', city:'Las Vegas', nickname: 'Raiders'},
	{abbreviation: 'DEN', city:'Denver', nickname: 'Broncos'},
	{abbreviation: 'LA', city:'Los Angeles', nickname: 'Chargers'},
];

Team.bulkCreate(teams,{validate:true}).then(()=>{
	console.log('teams created')
});

module.exports = Team;


