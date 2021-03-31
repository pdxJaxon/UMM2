const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('College',
	{
		id: {
			field: 'CollegeId',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
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
