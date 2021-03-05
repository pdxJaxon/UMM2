const { Sequelize } = require('sequelize');
const db = require('../db');


Pick = db.connection.define('pick',
	{
		Id: {
			field: 'pickId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		pickNumber: {
			field: 'pickNumber',
			type: Sequelize.INTEGER
		},
		teamId: {
			field: 'teamId',
			type: Sequelize.INTEGER,
			references: {
				model: 'Team',
				key: 'Id'
			}
		}
	},
	{
		freezeTableName: true
	}
)



Pick.associate = function(models){
	Team.belongsTo(models.Team);
}

Pick.associate = function(models){
	Team.belongsTo(models.Round);
}


module.exports = Pick;


