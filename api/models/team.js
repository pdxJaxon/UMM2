const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

	sequelize.define('team',
	{
		Id: {
			field: 'Id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: false
		},
		abbreviation: {
			field: 'abbreviation',
			type: DataTypes.STRING
		},
		city: {
			field: 'city',
			type: DataTypes.STRING
		},
		nickname: {
			field: 'nickname',
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true
	}
)

};


