const { Sequelize } = require('sequelize');
const db = require('../db')

const Draft = require('../models/draft');


Round = db.connection.define('round',
	{
		roundId: {
			field: 'roundId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		draftId: {
			field: 'draftId',
			type: Sequelize.INTEGER
		}
	},
	{
		freezeTableName: true
	}
)



rounds = [
	{roundId: 1, draftId: 1},
	{roundId: 2, draftId: 1},
	{roundId: 3, draftId: 1},
	{roundId: 4, draftId: 1},
	{roundId: 5, draftId: 1},
	{roundId: 6, draftId: 1},
	{roundId: 7, draftId: 1}
	
	
];

Round.bulkCreate(rounds,{validate:true}).then(()=>{
	console.log('rounds created')
});


module.exports = Round;

