const { Sequelize } = require('sequelize');

const db = require('../db');


Prospect = db.connection.define('prospect',
	{
		Id: {
			field: 'prospectId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		fname: {
			field: 'FName',
			type: Sequelize.STRING
		},
		lname: {
			field: 'LName',
			type: Sequelize.STRING
		},
		height: {
			field: 'Height',
			type: Sequelize.STRING
		},
		weight: {
			field: 'Weight',
			type: Sequelize.STRING
		},
		year: {
			field: 'Year',
			type: Sequelize.STRING
		},
		schoolId: {
			field: 'SchoolId',
			type: Sequelize.INTEGER
		}
	},
	{
		freezeTableName: true
	}
)


Prospect.associate = function(models){
	Prospect.belongsTo(models.Position);
}



module.exports = Prospect



