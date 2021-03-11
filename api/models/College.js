const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('College',
	{
		id: {
			field: 'CollegeId',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: true
		},
		Name: {
			field: 'CollegeName',
			type: DataTypes.STRING
		},
		Abbreviation: {
			field: 'Abbreviation',
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true
	}
)

};
