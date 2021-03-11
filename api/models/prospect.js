const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('prospect',
	{
		Id: {
			field: 'prospectId',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		fname: {
			field: 'FName',
			type: DataTypes.STRING
		},
		lname: {
			field: 'LName',
			type: DataTypes.STRING
		},
		positionId: {
			field: 'positionId',
			type: DataTypes.STRING,
			references: {
				model:'Position',
				key: 'Id'
			}
		},
		height: {
			field: 'Height',
			type: DataTypes.STRING
		},
		weight: {
			field: 'Weight',
			type: DataTypes.STRING
		},
		year: {
			field: 'Year',
			type: DataTypes.STRING
		},
		schoolId: {
			field: 'SchoolId',
			type: DataTypes.INTEGER
		}
	},
	{
		freezeTableName: true
	}
)

};



