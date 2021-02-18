const { Sequelize } = require('sequelize');
const db = require('../db')

const Draft = require('../models/draft');


Round = db.connection.define('round',
	{
		Id: {
			field: 'roundId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		}
	},
	{
		freezeTableName: true
	}
)

Round.associate = function(models){
	Round.belongsTo(models.Draft);
}


module.exports = Round;

