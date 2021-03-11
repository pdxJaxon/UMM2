

function dropTables(database) {
    //this is a hack for dev only!
    //todo: check status of posted github issue, https://github.com/sequelize/sequelize/issues/7606
    const queryInterface = database.getQueryInterface();
    return queryInterface.dropAllTables();
    console.log("All Tables Dropped");
    
}




function dropConstraints(database) {
    //this is a hack for dev only!
    //todo: check status of posted github issue, https://github.com/sequelize/sequelize/issues/7606
    const queryInterface = database.getQueryInterface();
    return queryInterface.showAllTables()
    .then(tableNames => {

        return Promise.all(tableNames.map(tableName => {
        	console.log("ZAP " + tableName)
            return queryInterface.showConstraint(tableName)
            .then(constraints => {
                return Promise.all(constraints.map(constraint => {
                    console.log("ZAP " + tableName + ":" + constraint.constraintName)
                    return queryInterface.removeConstraint(tableName, constraint.constraintName);
                    
                }));
            });
        }));
    })
    
}


async function applyExtraSetup(sequelize) {
	const { team,prospect,position,draft,pick,teamNeed,school } = sequelize.models;
	
	

	//orchestra.hasMany(instrument);
	//instrument.belongsTo(orchestra);

	team.hasMany(teamNeed);
	teamNeed.belongsTo(team);
	teamNeed.belongsTo(position);
	position.hasMany(teamNeed);
	position.hasMany(prospect);
	prospect.belongsTo(teamNeed);
	draft.hasMany(pick);
	pick.belongsTo(draft);
	pick.belongsTo(team)
	team.hasMany(pick);


	dropConstraints(sequelize);
	dropTables(sequelize);
	

try{
	 sequelize.sync({force:true}).then(() => {
			console.log("The DBS have Synched......in Theory");
			populateData(sequelize);
		});


}
catch(e){
	console.log("Something tanked " + e)
	return
}




function SeedTeams(database){
	const queryInterface = database.getQueryInterface();
    
    queryInterface.bulkInsert('team',[
    {Id: 1, abbreviation: 'LAR', city:'Los Angeles', nickname: 'Rams', createdAt: new Date(),updatedAt: new Date()},
    {Id: 2, abbreviation: 'SEA', city:'Seattle', nickname: 'Seahawks', createdAt: new Date(),updatedAt: new Date()},
    {Id: 3, abbreviation: 'AZ', city:'Arizona', nickname: 'Cardinals', createdAt: new Date(),updatedAt: new Date()},
    {Id: 4, abbreviation: 'SF', city:'San Francisco', nickname: '49ers', createdAt: new Date(),updatedAt: new Date()},
    {Id: 5, abbreviation: 'NO', city:'New Orleans', nickname: 'Saints', createdAt: new Date(),updatedAt: new Date()},
    {Id: 6, abbreviation: 'TB', city:'Tampa Bay', nickname: 'Buccaneers', createdAt: new Date(),updatedAt: new Date()},
    {Id: 7, abbreviation: 'CAR', city:'Carolina', nickname: 'Panthers', createdAt: new Date(),updatedAt: new Date()},
    {Id: 8, abbreviation: 'ATL', city:'Atlanta', nickname: 'Falcons', createdAt: new Date(),updatedAt: new Date()},
    {Id: 9, abbreviation: 'PHI', city:'Philadelphia', nickname: 'Eagles', createdAt: new Date(),updatedAt: new Date()},
    {Id: 10, abbreviation: 'NYG', city:'New York', nickname: 'Giants', createdAt: new Date(),updatedAt: new Date()},
    {Id: 11, abbreviation: 'DAL', city:'Dallas', nickname: 'Cowboys', createdAt: new Date(),updatedAt: new Date()},
    {Id: 12, abbreviation: 'WAS', city:'Washington', nickname: 'Football Team', createdAt: new Date(),updatedAt: new Date()},
    {Id: 13, abbreviation: 'GB', city:'Green Bay', nickname: 'Packers', createdAt: new Date(),updatedAt: new Date()},
    {Id: 14, abbreviation: 'CHI', city:'Chicago', nickname: 'Bears', createdAt: new Date(),updatedAt: new Date()},
    {Id: 15, abbreviation: 'MIN', city:'Minnesota', nickname: 'Vikings', createdAt: new Date(),updatedAt: new Date()},
    {Id: 16, abbreviation: 'DET', city:'Detroit', nickname: 'Lions', createdAt: new Date(),updatedAt: new Date()},
    {Id: 17, abbreviation: 'BUF', city:'Buffalo', nickname: 'Bills', createdAt: new Date(),updatedAt: new Date()},
    {Id: 18, abbreviation: 'MIA', city:'Miami', nickname: 'Dolphins', createdAt: new Date(),updatedAt: new Date()},
    {Id: 19, abbreviation: 'NE', city:'New England', nickname: 'Patriots', createdAt: new Date(),updatedAt: new Date()},
    {Id: 20, abbreviation: 'NYJ', city:'New York', nickname: 'Jets', createdAt: new Date(),updatedAt: new Date()},
    {Id: 21, abbreviation: 'IND', city:'Indianapolis', nickname: 'Colts', createdAt: new Date(),updatedAt: new Date()},
    {Id: 22, abbreviation: 'TEN', city:'Tennessee', nickname: 'Titans', createdAt: new Date(),updatedAt: new Date()},
    {Id: 23, abbreviation: 'HOU', city:'Houston', nickname: 'Texans', createdAt: new Date(),updatedAt: new Date()},
    {Id: 24, abbreviation: 'JAX', city:'Jacksonville', nickname: 'Jaguars', createdAt: new Date(),updatedAt: new Date()},
    {Id: 25, abbreviation: 'PIT', city:'Pittsburgh', nickname: 'Steelers', createdAt: new Date(),updatedAt: new Date()},
    {Id: 26, abbreviation: 'CLE', city:'Cleveland', nickname: 'Browns', createdAt: new Date(),updatedAt: new Date()},
    {Id: 27, abbreviation: 'BAL', city:'Baltimore', nickname: 'Ravens', createdAt: new Date(),updatedAt: new Date()},
    {Id: 28, abbreviation: 'CIN', city:'Cincinnati', nickname: 'Bengals', createdAt: new Date(),updatedAt: new Date()},
    {Id: 29, abbreviation: 'KC', city:'Kansas City', nickname: 'Chiefs', createdAt: new Date(),updatedAt: new Date()},
    {Id: 30, abbreviation: 'LV', city:'Las Vegas', nickname: 'Raiders', createdAt: new Date(),updatedAt: new Date()},
    {Id: 31, abbreviation: 'DEN', city:'Denver', nickname: 'Broncos', createdAt: new Date(),updatedAt: new Date()},
    {Id: 32, abbreviation: 'LAC', city:'Los Angeles', nickname: 'Chargers', createdAt: new Date(),updatedAt: new Date()}
  ],{validate:false});
}

function populateData(database) {

	
	console.log("Starting to seed data");

	SeedTeams(database);


	console.log("All Data Seeded");
	
    
}




	


	

}

module.exports = { applyExtraSetup };