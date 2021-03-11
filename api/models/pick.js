const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('pick',
	{
		Id: {
			field: 'pickId',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		pickNumber: {
			field: 'pickNumber',
			type: DataTypes.INTEGER
		},
		teamId: {
			field: 'teamId',
			type: DataTypes.INTEGER,
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

};


