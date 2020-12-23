const { Sequelize } = require('sequelize');
const db = require('../db')

School = db.connection.define('school',
	{
		id: {
			field: 'schoolId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		abbreviation: {
			field: 'abbreviation',
			type: Sequelize.STRING
		},
		name: {
			field: 'name',
			type: Sequelize.STRING
		},
		mascot: {
			field: 'mascot'
			type: Sequelize.STRING
		}
	},
	{
		freezeTableName: true
	}
)

School.associate = function(models) {
	School.belongsTo(models.Conference)
}

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


