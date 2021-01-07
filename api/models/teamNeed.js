const { Sequelize } = require('sequelize');
const db = require('../db')

const Team = require('./models/team')
const Position = require('./models/position')

TeamNeed = db.connection.define('teamNeed',
	{
		teamNeedId: {
			field: 'teamNeedId',
			type: Sequelize.Integer,
			primaryKey: true,
			autoincrement: true
		},
		teamId: {
			field: 'teamId',
			type: Sequelize.Integer
		},
		positionId: {
			field: 'positionId',
			type: Sequelize.Integer
		},
		needScore: {
			field: 'needScore',
			type: Sequelize.Integer
		}
		
	},
	{
		freezeTableName: true
	}
)

TeamNeed.hasOne(Team)
TeamNeed.hasOne(Position)

schools = [
	{abbreviation: 'UofO', name: 'University of Oregon', mascot: 'Ducks',conference:''},
	{abbreviation: 'UofO', name: 'University of Oregon', mascot: 'Ducks',conference:''},
	{abbreviation: 'UofO', name: 'University of Oregon', mascot: 'Ducks',conference:''},
	{abbreviation: 'UofO', name: 'University of Oregon', mascot: 'Ducks',conference:''},
	{abbreviation: 'UofO', name: 'University of Oregon', mascot: 'Ducks',conference:''},
	{abbreviation: 'UofO', name: 'University of Oregon', mascot: 'Ducks',conference:''},
	{abbreviation: 'UofO', name: 'University of Oregon', mascot: 'Ducks',conference:''},
	{abbreviation: 'UofO', name: 'University of Oregon', mascot: 'Ducks',conference:''},
	{abbreviation: 'UofO', name: 'University of Oregon', mascot: 'Ducks',conference:''},
	{abbreviation: 'UofO', name: 'University of Oregon', mascot: 'Ducks',conference:''},
	{abbreviation: 'UofO', name: 'University of Oregon', mascot: 'Ducks',conference:''},
	
];


School.bulkCreate(schools,{validate:true}).then(()=>{
	console.log('schools created')
});



module.export = School