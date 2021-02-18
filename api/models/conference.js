const { Sequelize } = require('sequelize');
const db = require('../db')

Conference = db.connection.define('conference',
	{
		id: {
			field: 'conferenceId',
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
		}
	},
	{
		freezeTableName: true
	}
)



conferences = [
	{abbreviation: 'American', name: 'American Atheletic Conference'},
	{abbreviation: 'ACC', name: 'Atlantic Coast Conference'},
	{abbreviation: 'Big 12', name: 'Big 12 Conference'},
	{abbreviation: 'Big Ten', name: 'Big 10 Conference'},
	{abbreviation: 'Conference USA', name: 'Conference USA'},
	{abbreviation: 'FBS Independents', name: 'FBS Independents'},
	{abbreviation: 'Mid-American', name: 'Mid American Conference'},
	{abbreviation: 'Mountain West', name: 'Mountain West Conference'},
	{abbreviation: 'Pac-12', name: 'Pac 12 Conference'},
	{abbreviation: 'SEC', name: 'Southeastern Conference'},
	{abbreviation: 'Sunbelt', name: 'Sunbelt Conference'},
];



module.exports = Conference;

