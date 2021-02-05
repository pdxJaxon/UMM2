const { Sequelize } = require('sequelize');
const db = require('../db')


//example: Tightend - TE
Position = db.connection.define('Position',
	{
		positionId: {
			field: 'positionId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		positionName: {
			field: 'positionName',
			type: Sequelize.STRING
		},
		positionAbbreviation: {
			field: 'positionAbbreviation',
			type: Sequelize.STRING
		},
		positionImportance: {
			field: 'positionImportance',
			type: Sequelize.INTEGER
		}
	},
	{
		freezeTableName: true
	}
)


positions = [
	{positionId: 1, positionName: 'Quarterback', positionAbbreviation: 'QB', positionImportance: 100},
	{positionId: 2, positionName: 'Interior Offensive Line', positionAbbreviation: 'IOL', positionImportance: 80},
	{positionId: 3, positionName: 'Offensive Tackle', positionAbbreviation: 'OT', positionImportance: 90},
	{positionId: 4, positionName: 'Wide Receiver', positionAbbreviation: 'WR', positionImportance: 75},
	{positionId: 5, positionName: 'Running Back', positionAbbreviation: 'RB', positionImportance: 70},
	{positionId: 6, positionName: 'Tight End', positionAbbreviation: 'TE', positionImportance: 60},
	{positionId: 7, positionName: 'Fullback', positionAbbreviation: 'FB', positionImportance: 50},
	{positionId: 8, positionName: 'Linebacker', positionAbbreviation: 'LB', positionImportance: 80},
	{positionId: 9, positionName: 'Edge', positionAbbreviation: 'Edge', positionImportance: 90},
	{positionId: 10, positionName: 'Defensive Line', positionAbbreviation: 'DL', positionImportance: 75},
	{positionId: 11, positionName: 'Cornerback', positionAbbreviation: 'CB', positionImportance: 90},
	{positionId: 12, positionName: 'Safety', positionAbbreviation: 'S', positionImportance: 80},
	{positionId: 13, positionName: 'Punter', positionAbbreviation: 'P', positionImportance: 20},
	{positionId: 14, positionName: 'Kicker', positionAbbreviation: 'K', positionImportance: 20},
	{positionId: 15, positionName: 'Long Snapper', positionAbbreviation: 'LS', positionImportance: 10}
];


Position.bulkCreate(positions,{validate:true}).then(()=>{
	console.log('positions created')
});

module.exports = Position;

