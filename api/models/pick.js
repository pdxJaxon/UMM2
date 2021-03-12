const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('pick',
	{
		Id: {
			field: 'Id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		roundId: {
			field: 'roundId',
			type: DataTypes.INTEGER,
			references: {
				model: 'round',
				key: 'Id'
			}
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


