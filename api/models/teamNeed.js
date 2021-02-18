const { Sequelize } = require('sequelize');
const db = require('../db')




TeamNeed = db.connection.define('teamNeed',
	{
		Id: {
			field: 'Id',
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoincrement: true
		},
		needScore: {
			field: 'needScore',
			type: Sequelize.INTEGER
		}
		
	},
	{
		freezeTableName: true
	}
)

TeamNeed.associate = function(models){
	TeamNeed.belongsTo(models.Team);
}

TeamNeed.associate = function(models){
	TeamNeed.belongsTo(models.Position);
}


module.exports = TeamNeed