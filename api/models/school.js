const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('School',
	{
		Id: {
			field: 'schoolId',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		abbreviation: {
			field: 'abbreviation',
			type: DataTypes.STRING
		},
		name: {
			field: 'name',
			type: DataTypes.STRING
		},
		mascot: {
			field: 'mascot',
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true
	}
)

};


