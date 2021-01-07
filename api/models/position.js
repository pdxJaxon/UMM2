const { Sequelize } = require('sequelize');
const db = require('../db')


//example: Tightend - TE
module.exports = db.connection.define('Position',
	{
		id: {
			field: 'positionId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: true
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
	{positionName: 'Quarterback', positionAbbreviation: 'QB', positionImportance: 100},
	{positionName: 'Offensive Guard', positionAbbreviation: 'OLG', positionImportance: 80},
	{positionName: 'Offensive Tackle', positionAbbreviation: 'OLT', positionImportance: 90},
	{positionName: 'Center', positionAbbreviation: 'OLC', positionImportance: 85},
	{positionName: 'Wide Receiver', positionAbbreviation: 'WR', positionImportance: 75},
	{positionName: 'Running Back', positionAbbreviation: 'RB', positionImportance: 70},
	{positionName: 'Tight End', positionAbbreviation: 'TE', positionImportance: 60},
	{positionName: 'Fullback', positionAbbreviation: 'FB', positionImportance: 50},
	{positionName: 'Inside Linebacker', positionAbbreviation: 'ILB', positionImportance: 80},
	{positionName: 'Edge', positionAbbreviation: 'Edge', positionImportance: 90},
	{positionName: 'Defensive Line', positionAbbreviation: 'DL', positionImportance: 75},
	{positionName: 'Nose Tackle', positionAbbreviation: 'NT', positionImportance: 60},
	{positionName: 'Cornerback', positionAbbreviation: 'CB', positionImportance: 90},
	{positionName: 'Safety', positionAbbreviation: 'S', positionImportance: 80},
	{positionName: 'Punter', positionAbbreviation: 'P', positionImportance: 20},
	{positionName: 'Kicker', positionAbbreviation: 'K', positionImportance: 20},
	{positionName: 'Long Snapper', positionAbbreviation: 'LS', positionImportance: 10}
];


Position.bulkCreate(positions,{validate:true}).then(()=>{
	console.log('positions created')
});

module.exports = Position;

