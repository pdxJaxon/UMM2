const { Sequelize } = require('sequelize');
const db = require('../db')

TeamNeed = db.connection.define('teamNeed',
	{
		
		needScore: {
			field: 'needScore',
			type: Sequelize.Integer
		}
		
	},
	{
		freezeTableName: true
	}
)

TeamNeed.belongsTo(Team);
TeamNeed.belongsTo(Position)

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