const { Sequelize } = require('sequelize');
const db = require('../db')




Position = db.connection.define('position',
	{
		Id: {
			field: 'Id',
			type: Sequelize.STRING,
			allowNull: false,
			primaryKey: true
		},
		name: {
			field: 'name',
			type: Sequelize.STRING,
			allowNull: false
		},
		positionPriority: {
			field: 'positionPriority',
			type: Sequelize.INTEGER,
			allowNull: false
		}
	},
	{
		freezeTableName: true
	}
)


Position.associate = function(models){
	Position.hasMany(models.TeamNeed);
}

Position.associate = function(models){
	Position.hasMany(models.prospect);
}


module.exports = Position;


