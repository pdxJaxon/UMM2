const { Sequelize } = require('sequelize');
const db = require('../db');

Draft = db.connection.define('draft',
	{
		draftId: {
			field: 'draftId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		}
	},
	{
		freezeTableName: true
	}
)


drafts = [
	{draftId: 1}
];

Draft.bulkCreate(drafts,{validate:true}).then(()=>{
	console.log('drafts created')
});



module.exports = Draft;


