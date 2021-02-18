const { Sequelize } = require('sequelize');
const db = require('../db')



Team = db.connection.define('team',
	{
		Id: {
			field: 'teamId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
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


Team.associate = function(models){
	Team.hasMany(models.TeamNeed);
}

Team.associate = function(models){
	Team.hasMany(models.Pick);
}




module.exports = Team;


