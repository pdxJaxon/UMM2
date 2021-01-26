const { Sequelize } = require('sequelize');

const db = require('../db');
const position = require('../models/position');


Prospect = db.connection.define('prospect',
	{
		prospectId: {
			field: 'prospectId',
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoincrement: false
		},
		FName: {
			field: 'FName',
			type: Sequelize.STRING
		},
		LName: {
			field: 'LName',
			type: Sequelize.STRING
		},
		Height: {
			field: 'Height',
			type: Sequelize.STRING
		},
		Weight: {
			field: 'Weight',
			type: Sequelize.STRING
		},
		PositionId: {
			field: 'PositionId',
			type: Sequelize.INTEGER
		},
		Year: {
			field: 'Year',
			type: Sequelize.STRING
		},
		SchoolId: {
			field: 'SchoolId',
			type: Sequelize.INTEGER
		}
	},
	{
		freezeTableName: true
	}
)

prospects = [
	{"prospectId":1, "fname": "Trevor", "lname":"Lawrence", "positionId":1,"year":"Jr","school":"Clemson","height":"6-6","weight":"208"},
	{"prospectId":2, "fname": "Justin", "lname":"Fields", "positionId":1,"year":"JR","school":"Ohio State","height":"6-3","weight":"228"},
	{"prospectId":3, "fname": "Penei", "lname":"Sewell", "positionId":3,"year":"SO","school":"Oregon","height":"6-6","weight":"325"},
	{"prospectId":4, "fname": "Ja'Marr", "lname":"Chase", "positionId":4,"year":"SO","school":"LSU","height":"6-1","weight":"200"},
	{"prospectId":5, "fname": "Micah", "lname":"Parsons", "positionId":8,"year":"JR","school":"Penn State","height":"6-3","weight":"240"},
	{"prospectId":6, "fname": "Jaylen", "lname":"Waddle", "positionId":4,"year":"JR","school":"Alabama","height":"5-10","weight":"182"},
	{"prospectId":7, "fname": "Trey", "lname":"Lance", "positionId":1,"year":"SO","school":"North Dakota","height":"6-4","weight":"226"},
	{"prospectId":8, "fname": "Kyle", "lname":"Pitts", "positionId":6,"year":"JR","school":"Florida","height":"6-6","weight":"240"},
	{"prospectId":9, "fname": "Kwity", "lname":"Paye", "positionId":9,"year":"Sr","school":"Michigan","height":"6-4","weight":"272"},
	{"prospectId":10, "fname": "Gregory", "lname":"Rousseau", "positionId":9,"year":"FR","school":"Miami","height":"6-6","weight":"260"},
	{"prospectId":11, "fname": "Rondale", "lname":"Moore", "positionId":4,"year":"","school":"Purdue","height":"","weight":""},
	{"prospectId":12, "fname": "Alex", "lname":"Leatherwood", "positionId":3,"year":"JR","school":"Oregon","height":"6-6","weight":"345"},
	{"prospectId":13, "fname": "Marvin", "lname":"Wilson", "positionId":10,"year":"","school":"Florida State","height":"","weight":""},	
	{"prospectId":14, "fname": "Nick", "lname":"Bolton", "positionId":8,"year":"","school":"Missouri","height":"","weight":""},
	{"prospectId":15, "fname": "Dylan", "lname":"Moses", "positionId":8,"year":"","school":"Alabama","height":"","weight":""},
	{"prospectId":16, "fname": "Carlos", "lname":"Basham Jr", "positionId":9,"year":"","school":"Wake Forest","height":"","weight":""},
	{"prospectId":17, "fname": "Caleb", "lname":"Farley", "positionId":11,"year":"","school":"Virginia Tech","height":"","weight":""},
	{"prospectId":18, "fname": "Walker", "lname":"Little", "positionId":3,"year":"","school":"Standord","height":"","weight":""},
	{"prospectId":19, "fname": "Brock", "lname":"Purdy", "positionId":1,"year":"","school":"Iowa St","height":"","weight":""},
	{"prospectId":20, "fname": "Christian", "lname":"Barmore", "positionId":10,"year":"","school":"Alabama","height":"","weight":""},
	{"prospectId":21, "fname": "Ar'Darius", "lname":"Washington", "positionId":12,"year":"","school":"TCU","height":"","weight":""},
	{"prospectId":22, "fname": "Jevon", "lname":"Holland", "positionId":11,"year":"","school":"Oregon","height":"","weight":""},
	{"prospectId":23, "fname": "Samuel", "lname":"Cosmi", "positionId":3,"year":"","school":"Texas","height":"","weight":""},
	{"prospectId":24, "fname": "Rashod", "lname":"Bateman", "positionId":4,"year":"","school":"Minnesota","height":"","weight":""},
	{"prospectId":25, "fname": "Shaun", "lname":"Wade", "positionId":11,"year":"","school":"Ohio State","height":"","weight":""},
	{"prospectId":26, "fname": "Amon-Ra", "lname":"St Brown", "positionId":4,"year":"","school":"USC.","height":"","weight":""},
	{"prospectId":27, "fname": "DeVonta", "lname":"Smith", "positionId":4,"year":"","school":"Alabama","height":"","weight":""},
	{"prospectId":28, "fname": "Wyatt", "lname":"Davis", "positionId":2,"year":"","school":"Ohio State","height":"","weight":""},
	{"prospectId":29, "fname": "Patrick", "lname":"Surtain II", "positionId":11,"year":"","school":"Alabama","height":"","weight":""},
	{"prospectId":30, "fname": "Travis", "lname":"Etienne", "positionId":5,"year":"","school":"Clemson","height":"","weight":""},
	{"prospectId":31, "fname": "Pat", "lname":"Freiermuth", "positionId":6,"year":"","school":"Penn State","height":"","weight":""},
	{"prospectId":32, "fname": "Andre", "lname":"Cisco", "positionId":12,"year":"","school":"Syracuse","height":"","weight":""},
	{"prospectId":33, "fname": "Chris", "lname":"Rumph II", "positionId":9,"year":"","school":"Duke","height":"","weight":""},
	{"prospectId":34, "fname": "Tutu", "lname":"Atwell", "positionId":4,"year":"","school":"Louisville","height":"","weight":""},
	{"prospectId":35, "fname": "Hamsah", "lname":"Nasirildeen", "positionId":12,"year":"","school":"Florida State","height":"","weight":""},
	{"prospectId":36, "fname": "Trey", "lname":"Smith", "positionId":2,"year":"","school":"Tennessee","height":"","weight":""},
	{"prospectId":37, "fname": "Trevon", "lname":"Moehrig", "positionId":12,"year":"","school":"TCU","height":"","weight":""},
	{"prospectId":38, "fname": "Aidan", "lname":"Hutchinson", "positionId":9,"year":"","school":"Michigan","height":"","weight":""},
	{"prospectId":39, "fname": "Xavier", "lname":"Thomas", "positionId":9,"year":"","school":"Clemson","height":"","weight":""},
	{"prospectId":40, "fname": "Chris", "lname":"Olave", "positionId":4,"year":"","school":"Ohio State","height":"","weight":""},
	{"prospectId":41, "fname": "Asante", "lname":"Samuel Jr", "positionId":11,"year":"","school":"Florida State","height":"","weight":""},
	{"prospectId":42, "fname": "Levi", "lname":"Onwuzurike", "positionId":10,"year":"","school":"Washington","height":"","weight":""},
	{"prospectId":43, "fname": "Tamorrion", "lname":"Terry", "positionId":4,"year":"","school":"Florida State","height":"","weight":""},
	{"prospectId":44, "fname": "Liam", "lname":"Eichenberg", "positionId":3,"year":"","school":"Notre Dame","height":"","weight":""},
	{"prospectId":45, "fname": "Cory", "lname":"Durden", "positionId":10,"year":"","school":"Florida State","height":"","weight":""},
	{"prospectId":46, "fname": "Chazz", "lname":"Surratt", "positionId":8,"year":"","school":"North Carolina","height":"","weight":""},
	{"prospectId":47, "fname": "Quincy", "lname":"Roche", "positionId":9,"year":"","school":"Miami","height":"","weight":""},
	{"prospectId":48, "fname": "Tyler", "lname":"Linderbaum", "positionId":2,"year":"","school":"Iowa","height":"","weight":""},
	{"prospectId":49, "fname": "Jayson", "lname":"Oweh", "positionId":9,"year":"","school":"Penn State","height":"","weight":""},
	{"prospectId":50, "fname": "Jamie", "lname":"Newman", "positionId":1,"year":"","school":"Georgia","height":"","weight":""}	
];




Prospect.bulkCreate(prospects,{validate:false}).then(()=>{
	console.log('prospects created')
});






module.exports = Prospect



