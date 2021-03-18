

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
	const { team,prospect,position,draft,pick,teamNeed,school,round,mock,mockSelection } = sequelize.models;
	
	
	team.hasMany(teamNeed);
	teamNeed.belongsTo(team);
	teamNeed.belongsTo(position);
	position.hasMany(teamNeed);
	position.hasMany(prospect);
	prospect.belongsTo(teamNeed);
	draft.hasMany(pick);
	pick.belongsTo(draft);
    team.hasMany(pick);
	pick.belongsTo(team);
    team.hasMany(pick);
    round.belongsTo(draft);
    draft.hasMany(round);
    mockSelection.belongsTo(pick);
    mockSelection.belongsTo(prospect);
    mockSelection.belongsTo(mock);


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




function SeedPositions(database){
    const queryInterface = database.getQueryInterface();
    
    queryInterface.bulkInsert('position',[
    {Id: 'QB', name: 'Quarterback', positionPriority:100, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'WR', name: 'Wide Receiver', positionPriority:75, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'TE', name: 'Tight End', positionPriority:60, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'RB', name: 'Running BacK', positionPriority:70, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'FB', name: 'Fullback', positionPriority:30, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'OC', name: 'Center', positionPriority:70, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'OG', name: 'Guard', positionPriority:80, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'OT', name: 'Tackle', positionPriority:85, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'CB', name: 'Cornerback', positionPriority:80, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'S', name: 'Safety', positionPriority:60, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'LB', name: 'Linebacker', positionPriority:75, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'EDGE', name: 'Edge Rusher', positionPriority:90, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'DL', name: 'Defensive Lineman', positionPriority:75, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'K', name: 'Kicker', positionPriority:20, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'P', name: 'Punter', positionPriority:10, createdAt: new Date(),updatedAt: new Date()},
    {Id: 'LS', name: 'Long Snapper', positionPriority:5, createdAt: new Date(),updatedAt: new Date()}
    
  ],{validate:false});
}




function SeedRounds(database){
    const queryInterface = database.getQueryInterface();
    
    queryInterface.bulkInsert('round',[
    {Id: 1, draftId: 2021, createdAt: new Date(),updatedAt: new Date()},
    {Id: 2, draftId: 2021, createdAt: new Date(),updatedAt: new Date()},
    {Id: 3, draftId: 2021, createdAt: new Date(),updatedAt: new Date()},
    {Id: 4, draftId: 2021, createdAt: new Date(),updatedAt: new Date()},
    {Id: 5, draftId: 2021, createdAt: new Date(),updatedAt: new Date()},
    {Id: 6, draftId: 2021, createdAt: new Date(),updatedAt: new Date()},
    {Id: 7, draftId: 2021, createdAt: new Date(),updatedAt: new Date()}
  ],{validate:false});
}


function SeedTeamNeeds(database){
    const queryInterface = database.getQueryInterface();
    
    queryInterface.bulkInsert('teamNeed',[
        {Id: 1, teamId: 1, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 2, teamId: 1, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 3, teamId: 1, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 4, teamId: 1, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 5, teamId: 1, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 6, teamId: 1, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 7, teamId: 1, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 8, teamId: 1, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 9, teamId: 1, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 10, teamId: 1, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 11, teamId: 1, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 12, teamId: 1, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 13, teamId: 1, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 14, teamId: 1, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 15, teamId: 1, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 16, teamId: 2, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 17, teamId: 2, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 18, teamId: 2, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 19, teamId: 2, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 20, teamId: 2, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 21, teamId: 2, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 22, teamId: 2, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 23, teamId: 2, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 24, teamId: 2, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 25, teamId: 2, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 26, teamId: 2, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 27, teamId: 2, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 28, teamId: 2, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 29, teamId: 2, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 30, teamId: 2, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 31, teamId: 3, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 32, teamId: 3, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 33, teamId: 3, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 34, teamId: 3, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 35, teamId: 3, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 36, teamId: 3, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 37, teamId: 3, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 38, teamId: 3, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 39, teamId: 3, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 40, teamId: 3, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 41, teamId: 3, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 42, teamId: 3, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 43, teamId: 3, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 44, teamId: 3, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 45, teamId: 3, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 46, teamId: 4, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 47, teamId: 4, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 48, teamId: 4, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 49, teamId: 4, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 50, teamId: 4, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 51, teamId: 4, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 52, teamId: 4, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 53, teamId: 4, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 54, teamId: 4, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 55, teamId: 4, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 56, teamId: 4, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 57, teamId: 4, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 58, teamId: 4, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 59, teamId: 4, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 60, teamId: 4, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 61, teamId: 5, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 62, teamId: 5, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 63, teamId: 5, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 64, teamId: 5, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 65, teamId: 5, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 66, teamId: 5, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 67, teamId: 5, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 68, teamId: 5, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 69, teamId: 5, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 70, teamId: 5, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 71, teamId: 5, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 72, teamId: 5, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 73, teamId: 5, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 74, teamId: 5, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 75, teamId: 5, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 76, teamId: 6, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 77, teamId: 6, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 78, teamId: 6, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 79, teamId: 6, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 80, teamId: 6, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 81, teamId: 6, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 82, teamId: 6, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 83, teamId: 6, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 84, teamId: 6, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 85, teamId: 6, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 86, teamId: 6, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 87, teamId: 6, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 88, teamId: 6, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 89, teamId: 6, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 90, teamId: 6, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 91, teamId: 7, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 92, teamId: 7, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 93, teamId: 7, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 94, teamId: 7, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 95, teamId: 7, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 96, teamId: 7, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 97, teamId: 7, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 98, teamId: 7, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 99, teamId: 7, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 100, teamId: 7, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 101, teamId: 7, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 102, teamId: 7, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 103, teamId: 7, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 104, teamId: 7, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 105, teamId: 7, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 106, teamId: 8, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 107, teamId: 8, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 108, teamId: 8, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 109, teamId: 8, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 110, teamId: 8, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 111, teamId: 8, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 112, teamId: 8, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 113, teamId: 8, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 114, teamId: 8, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 115, teamId: 8, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 116, teamId: 8, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 117, teamId: 8, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 118, teamId: 8, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 119, teamId: 8, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 120, teamId: 8, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 121, teamId: 9, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 122, teamId: 9, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 123, teamId: 9, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 124, teamId: 9, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 125, teamId: 9, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 126, teamId: 9, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 127, teamId: 9, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 128, teamId: 9, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 129, teamId: 9, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 130, teamId: 9, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 131, teamId: 9, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 132, teamId: 9, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 133, teamId: 9, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 134, teamId: 9, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 135, teamId: 9, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 136, teamId: 10, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 137, teamId: 10, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 138, teamId: 10, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 139, teamId: 10, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 140, teamId: 10, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 141, teamId: 10, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 142, teamId: 10, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 143, teamId: 10, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 144, teamId: 10, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 145, teamId: 10, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 146, teamId: 10, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 147, teamId: 10, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 148, teamId: 10, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 149, teamId: 10, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 150, teamId: 10, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 151, teamId: 11, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 152, teamId: 11, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 153, teamId: 11, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 154, teamId: 11, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 155, teamId: 11, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 156, teamId: 11, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 157, teamId: 11, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 158, teamId: 11, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 160, teamId: 11, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 161, teamId: 11, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 162, teamId: 11, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 163, teamId: 11, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 164, teamId: 11, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 165, teamId: 11, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 166, teamId: 11, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 167, teamId: 12, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 168, teamId: 12, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 169, teamId: 12, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 170, teamId: 12, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 171, teamId: 12, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 172, teamId: 12, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 173, teamId: 12, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 174, teamId: 12, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 175, teamId: 12, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 176, teamId: 12, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 177, teamId: 12, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 178, teamId: 12, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 179, teamId: 12, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 180, teamId: 12, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 181, teamId: 12, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 182, teamId: 13, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 183, teamId: 13, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 184, teamId: 13, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 185, teamId: 13, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 186, teamId: 13, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 187, teamId: 13, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 188, teamId: 13, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 189, teamId: 13, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 190, teamId: 13, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 191, teamId: 13, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 192, teamId: 13, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 193, teamId: 13, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 194, teamId: 13, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 195, teamId: 13, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 196, teamId: 13, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 197, teamId: 14, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 198, teamId: 14, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 199, teamId: 14, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 200, teamId: 14, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 201, teamId: 14, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 202, teamId: 14, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 203, teamId: 14, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 204, teamId: 14, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 205, teamId: 14, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 206, teamId: 14, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 207, teamId: 14, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 208, teamId: 14, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 209, teamId: 14, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 210, teamId: 14, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 211, teamId: 14, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 212, teamId: 15, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 213, teamId: 15, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 214, teamId: 15, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 215, teamId: 15, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 216, teamId: 15, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 217, teamId: 15, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 218, teamId: 15, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 219, teamId: 15, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 220, teamId: 15, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 221, teamId: 15, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 222, teamId: 15, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 223, teamId: 15, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 224, teamId: 15, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 225, teamId: 15, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 226, teamId: 15, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 227, teamId: 16, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 228, teamId: 16, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 229, teamId: 16, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 230, teamId: 16, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 231, teamId: 16, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 232, teamId: 16, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 233, teamId: 16, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 234, teamId: 16, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 235, teamId: 16, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 236, teamId: 16, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 237, teamId: 16, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 238, teamId: 16, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 239, teamId: 16, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 240, teamId: 16, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 241, teamId: 16, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 242, teamId: 17, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 243, teamId: 17, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 244, teamId: 17, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 245, teamId: 17, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 246, teamId: 17, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 247, teamId: 17, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 248, teamId: 17, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 249, teamId: 17, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 250, teamId: 17, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 251, teamId: 17, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 252, teamId: 17, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 253, teamId: 17, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 254, teamId: 17, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 255, teamId: 17, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 256, teamId: 17, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 257, teamId: 18, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 258, teamId: 18, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 259, teamId: 18, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 260, teamId: 18, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 261, teamId: 18, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 262, teamId: 18, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 263, teamId: 18, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 264, teamId: 18, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 265, teamId: 18, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 266, teamId: 18, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 267, teamId: 18, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 268, teamId: 18, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 269, teamId: 18, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 270, teamId: 18, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 271, teamId: 18, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 272, teamId: 19, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 273, teamId: 19, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 274, teamId: 19, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 275, teamId: 19, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 276, teamId: 19, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 277, teamId: 19, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 278, teamId: 19, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 279, teamId: 19, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 280, teamId: 19, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 281, teamId: 19, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 282, teamId: 19, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 283, teamId: 19, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 284, teamId: 19, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 285, teamId: 19, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 286, teamId: 19, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 287, teamId: 20, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 288, teamId: 20, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 289, teamId: 20, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 290, teamId: 20, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 291, teamId: 20, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 292, teamId: 20, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 293, teamId: 20, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 294, teamId: 20, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 295, teamId: 20, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 296, teamId: 20, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 297, teamId: 20, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 298, teamId: 20, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 299, teamId: 20, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 300, teamId: 20, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 301, teamId: 20, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 302, teamId: 21, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 303, teamId: 21, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 304, teamId: 21, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 305, teamId: 21, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 306, teamId: 21, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 307, teamId: 21, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 308, teamId: 21, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 309, teamId: 21, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 310, teamId: 21, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 311, teamId: 21, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 312, teamId: 21, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 313, teamId: 21, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 314, teamId: 21, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 315, teamId: 21, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 316, teamId: 21, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 317, teamId: 22, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 318, teamId: 22, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 319, teamId: 22, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 320, teamId: 22, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 321, teamId: 22, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 322, teamId: 22, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 323, teamId: 22, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 324, teamId: 22, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 325, teamId: 22, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 326, teamId: 22, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 327, teamId: 22, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 328, teamId: 22, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 329, teamId: 22, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 330, teamId: 22, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 331, teamId: 22, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 332, teamId: 23, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 333, teamId: 23, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 334, teamId: 23, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 335, teamId: 23, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 336, teamId: 23, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 337, teamId: 23, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 338, teamId: 23, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 339, teamId: 23, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 340, teamId: 23, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 341, teamId: 23, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 342, teamId: 23, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 343, teamId: 23, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 344, teamId: 23, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 345, teamId: 23, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 346, teamId: 23, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 347, teamId: 24, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 348, teamId: 24, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 349, teamId: 24, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 350, teamId: 24, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 351, teamId: 24, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 352, teamId: 24, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 353, teamId: 24, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 354, teamId: 24, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 355, teamId: 24, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 356, teamId: 24, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 357, teamId: 24, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 358, teamId: 24, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 359, teamId: 24, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 360, teamId: 24, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 361, teamId: 24, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 362, teamId: 25, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 363, teamId: 25, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 364, teamId: 25, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 365, teamId: 25, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 366, teamId: 25, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 367, teamId: 25, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 368, teamId: 25, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 369, teamId: 25, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 370, teamId: 25, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 371, teamId: 25, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 372, teamId: 25, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 373, teamId: 25, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 374, teamId: 25, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 375, teamId: 25, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 376, teamId: 25, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 377, teamId: 26, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 378, teamId: 26, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 379, teamId: 26, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 380, teamId: 26, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 381, teamId: 26, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 382, teamId: 26, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 383, teamId: 26, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 384, teamId: 26, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 385, teamId: 26, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 386, teamId: 26, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 387, teamId: 26, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 388, teamId: 26, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 389, teamId: 26, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 390, teamId: 26, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 391, teamId: 26, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 392, teamId: 27, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 393, teamId: 27, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 394, teamId: 27, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 395, teamId: 27, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 396, teamId: 27, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 397, teamId: 27, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 398, teamId: 27, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 399, teamId: 27, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 400, teamId: 27, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 401, teamId: 27, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 402, teamId: 27, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 403, teamId: 27, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 404, teamId: 27, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 405, teamId: 27, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 406, teamId: 27, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 407, teamId: 28, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 408, teamId: 28, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 409, teamId: 28, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 410, teamId: 28, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 411, teamId: 28, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 412, teamId: 28, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 413, teamId: 28, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 414, teamId: 28, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 415, teamId: 28, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 416, teamId: 28, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 417, teamId: 28, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 418, teamId: 28, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 419, teamId: 28, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 420, teamId: 28, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 421, teamId: 28, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 422, teamId: 29, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 423, teamId: 29, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 424, teamId: 29, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 425, teamId: 29, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 426, teamId: 29, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 427, teamId: 29, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 428, teamId: 29, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 429, teamId: 29, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 430, teamId: 29, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 431, teamId: 29, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 432, teamId: 29, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 433, teamId: 29, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 434, teamId: 29, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 435, teamId: 29, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 436, teamId: 29, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 437, teamId: 30, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 438, teamId: 30, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 439, teamId: 30, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 440, teamId: 30, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 441, teamId: 30, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 442, teamId: 30, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 443, teamId: 30, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 444, teamId: 30, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 445, teamId: 30, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 446, teamId: 30, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 447, teamId: 30, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 448, teamId: 30, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 449, teamId: 30, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 450, teamId: 30, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 451, teamId: 30, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 452, teamId: 31, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 453, teamId: 31, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 454, teamId: 31, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 455, teamId: 31, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 456, teamId: 31, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 457, teamId: 31, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 458, teamId: 31, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 459, teamId: 31, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 460, teamId: 31, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 461, teamId: 31, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 462, teamId: 31, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 463, teamId: 31, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 464, teamId: 31, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 465, teamId: 31, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 466, teamId: 31, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 467, teamId: 32, positionId: 'QB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 468, teamId: 32, positionId: 'WR', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 469, teamId: 32, positionId: 'TE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 470, teamId: 32, positionId: 'RB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 471, teamId: 32, positionId: 'FB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 472, teamId: 32, positionId: 'OC', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 473, teamId: 32, positionId: 'OG', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 474, teamId: 32, positionId: 'OT', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 475, teamId: 32, positionId: 'CB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 476, teamId: 32, positionId: 'S', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 477, teamId: 32, positionId: 'LB', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 478, teamId: 32, positionId: 'EDGE', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 479, teamId: 32, positionId: 'DL', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 480, teamId: 32, positionId: 'K', needScore: 50, createdAt: new Date(),updatedAt: new Date()},
    {Id: 481, teamId: 32, positionId: 'P', needScore: 50, createdAt: new Date(),updatedAt: new Date()}
  ],{validate:false});
}




function SeedProspects(database){
    const queryInterface = database.getQueryInterface();
    
    queryInterface.bulkInsert('prospect',[
    {Id:1, fname: "Trevor", lname:"Lawrence", positionId:"QB",year:"Jr",schoolId:"Clemson",height:"6-6",weight:"208", createdAt: new Date(),updatedAt: new Date()},
  {Id:2, fname: "Justin", lname:"Fields", positionId:"QB",year:"JR",schoolId:"Ohio State",height:"6-3",weight:"228", createdAt: new Date(),updatedAt: new Date()},
  {Id:3, fname: "Penei", lname:"Sewell", positionId:"OT",year:"SO",schoolId:"Oregon",height:"6-6",weight:"325", createdAt: new Date(),updatedAt: new Date()},
  {Id:4, fname: "Ja'Marr", lname:"Chase", positionId:"WR",year:"SO",schoolId:"LSU",height:"6-1",weight:"200", createdAt: new Date(),updatedAt: new Date()},
  {Id:5, fname: "Micah", lname:"Parsons", positionId:"LB",year:"JR",schoolId:"Penn State",height:"6-3",weight:"240", createdAt: new Date(),updatedAt: new Date()},
  {Id:6, fname: "Jaylen", lname:"Waddle", positionId:"WR",year:"JR",schoolId:"Alabama",height:"5-10",weight:"182", createdAt: new Date(),updatedAt: new Date()},
  {Id:7, fname: "Trey", lname:"Lance", positionId:"QB",year:"SO",schoolId:"North Dakota",height:"6-4",weight:"226", createdAt: new Date(),updatedAt: new Date()},
  {Id:8, fname: "Kyle", lname:"Pitts", positionId:"TE",year:"JR",schoolId:"Florida",height:"6-6",weight:"240", createdAt: new Date(),updatedAt: new Date()},
  {Id:9, fname: "Kwity", lname:"Paye", positionId:"EDGE",year:"Sr",schoolId:"Michigan",height:"6-4",weight:"272", createdAt: new Date(),updatedAt: new Date()},
  {Id:10, fname: "Gregory", lname:"Rousseau", positionId:"EDGE",year:"FR",schoolId:"Miami",height:"6-6",weight:"260", createdAt: new Date(),updatedAt: new Date()},
  {Id:11, fname: "Rondale", lname:"Moore", positionId:"WR",year:"",schoolId:"Purdue",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:12, fname: "Alex", lname:"Leatherwood", positionId:"OT",year:"JR",schoolId:"Oregon",height:"6-6",weight:"345", createdAt: new Date(),updatedAt: new Date()},
  {Id:13, fname: "Marvin", lname:"Wilson", positionId:"DL",year:"",schoolId:"Florida State",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()}, 
  {Id:14, fname: "Nick", lname:"Bolton", positionId:"LB",year:"",schoolId:"Missouri",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:15, fname: "Dylan", lname:"Moses", positionId:"LB",year:"",schoolId:"Alabama",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:16, fname: "Carlos", lname:"Basham Jr", positionId:"EDGE",year:"",schoolId:"Wake Forest",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:17, fname: "Caleb", lname:"Farley", positionId:"CB",year:"",schoolId:"Virginia Tech",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:18, fname: "Walker", lname:"Little", positionId:"OT",year:"",schoolId:"Standord",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:19, fname: "Brock", lname:"Purdy", positionId:"QB",year:"",schoolId:"Iowa St",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:20, fname: "Christian", lname:"Barmore", positionId:"DL",year:"",schoolId:"Alabama",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:21, fname: "Ar'Darius", lname:"Washington", positionId:"S",year:"",schoolId:"TCU",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:22, fname: "Jevon", lname:"Holland", positionId:"CB",year:"",schoolId:"Oregon",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:23, fname: "Samuel", lname:"Cosmi", positionId:"OT",year:"",schoolId:"Texas",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:24, fname: "Rashod", lname:"Bateman", positionId:"WR",year:"",schoolId:"Minnesota",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:25, fname: "Shaun", lname:"Wade", positionId:"CB",year:"",schoolId:"Ohio State",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:26, fname: "Amon-Ra", lname:"St Brown", positionId:"WR",year:"",schoolId:"USC.",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:27, fname: "DeVonta", lname:"Smith", positionId:"WR",year:"",schoolId:"Alabama",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:28, fname: "Wyatt", lname:"Davis", positionId:"OG",year:"",schoolId:"Ohio State",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:29, fname: "Patrick", lname:"Surtain II", positionId:"CB",year:"",schoolId:"Alabama",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:30, fname: "Travis", lname:"Etienne", positionId:"RB",year:"",schoolId:"Clemson",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:31, fname: "Pat", lname:"Freiermuth", positionId:"TE",year:"",schoolId:"Penn State",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:32, fname: "Andre", lname:"Cisco", positionId:"S",year:"",schoolId:"Syracuse",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:33, fname: "Chris", lname:"Rumph II", positionId:"EDGE",year:"",schoolId:"Duke",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:34, fname: "Tutu", lname:"Atwell", positionId:"WR",year:"",schoolId:"Louisville",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:35, fname: "Hamsah", lname:"Nasirildeen", positionId:"S",year:"",schoolId:"Florida State",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:36, fname: "Trey", lname:"Smith", positionId:"OG",year:"",schoolId:"Tennessee",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:37, fname: "Trevon", lname:"Moehrig", positionId:"S",year:"",schoolId:"TCU",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:38, fname: "Aidan", lname:"Hutchinson", positionId:"EDGE",year:"",schoolId:"Michigan",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:39, fname: "Xavier", lname:"Thomas", positionId:"EDGE",year:"",schoolId:"Clemson",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:40, fname: "Chris", lname:"Olave", positionId:"WR",year:"",schoolId:"Ohio State",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:41, fname: "Asante", lname:"Samuel Jr", positionId:"CB",year:"",schoolId:"Florida State",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:42, fname: "Levi", lname:"Onwuzurike", positionId:"DL",year:"",schoolId:"Washington",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:43, fname: "Tamorrion", lname:"Terry", positionId:"WR",year:"",schoolId:"Florida State",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:44, fname: "Liam", lname:"Eichenberg", positionId:"OT",year:"",schoolId:"Notre Dame",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:45, fname: "Cory", lname:"Durden", positionId:"DL",year:"",schoolId:"Florida State",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:46, fname: "Chazz", lname:"Surratt", positionId:"LB",year:"",schoolId:"North Carolina",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:47, fname: "Quincy", lname:"Roche", positionId:"EDGE",year:"",schoolId:"Miami",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:48, fname: "Tyler", lname:"Linderbaum", positionId:"OG",year:"",schoolId:"Iowa",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:49, fname: "Jayson", lname:"Oweh", positionId:"EDGE",year:"",schoolId:"Penn State",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()},
  {Id:50, fname: "Jamie", lname:"Newman", positionId:"QB",year:"",schoolId:"Georgia",height:"",weight:"", createdAt: new Date(),updatedAt: new Date()}
  ],{validate:false});
}





function SeedPicks(database){
    const queryInterface = database.getQueryInterface();
    
    queryInterface.bulkInsert('pick',[
        {Id:1, roundId: 1, pickNumber:1, teamId:24, createdAt: new Date(),updatedAt: new Date()},
      {Id:2, roundId: 1, pickNumber:2, teamId:20, createdAt: new Date(),updatedAt: new Date()},
      {Id:3, roundId: 1, pickNumber:3, teamId:28, createdAt: new Date(),updatedAt: new Date()},
      {Id:4, roundId: 1, pickNumber:4, teamId:8, createdAt: new Date(),updatedAt: new Date()},
      {Id:5, roundId: 1, pickNumber:5, teamId:7, createdAt: new Date(),updatedAt: new Date()},
      {Id:6, roundId: 1, pickNumber:6, teamId:18, createdAt: new Date(),updatedAt: new Date()},
      {Id:7, roundId: 1, pickNumber:7, teamId:9, createdAt: new Date(),updatedAt: new Date()},
      {Id:8, roundId: 1, pickNumber:8, teamId:32, createdAt: new Date(),updatedAt: new Date()},
      {Id:9, roundId: 1, pickNumber:9, teamId:11, createdAt: new Date(),updatedAt: new Date()},
      {Id:10, roundId: 1, pickNumber:10, teamId:10, createdAt: new Date(),updatedAt: new Date()},
      {Id:11, roundId: 1, pickNumber:11, teamId:16, createdAt: new Date(),updatedAt: new Date()},
      {Id:12, roundId: 1, pickNumber:12, teamId:4, createdAt: new Date(),updatedAt: new Date()},
      {Id:13, roundId: 1, pickNumber:13, teamId:31, createdAt: new Date(),updatedAt: new Date()},
      {Id:14, roundId: 1, pickNumber:14, teamId:15, createdAt: new Date(),updatedAt: new Date()},
      {Id:15, roundId: 1, pickNumber:15, teamId:19, createdAt: new Date(),updatedAt: new Date()},
      {Id:16, roundId: 1, pickNumber:16, teamId:14, createdAt: new Date(),updatedAt: new Date()},
      {Id:17, roundId: 1, pickNumber:17, teamId:30, createdAt: new Date(),updatedAt: new Date()},
      {Id:18, roundId: 1, pickNumber:18, teamId:27, createdAt: new Date(),updatedAt: new Date()},
      {Id:19, roundId: 1, pickNumber:19, teamId:12, createdAt: new Date(),updatedAt: new Date()},
      {Id:20, roundId: 1, pickNumber:20, teamId:3, createdAt: new Date(),updatedAt: new Date()},
      {Id:21, roundId: 1, pickNumber:21, teamId:18, createdAt: new Date(),updatedAt: new Date()},
      {Id:22, roundId: 1, pickNumber:22, teamId:24, createdAt: new Date(),updatedAt: new Date()},
      {Id:23, roundId: 1, pickNumber:23, teamId:6, createdAt: new Date(),updatedAt: new Date()},
      {Id:24, roundId: 1, pickNumber:24, teamId:20, createdAt: new Date(),updatedAt: new Date()},
      {Id:25, roundId: 1, pickNumber:25, teamId:21, createdAt: new Date(),updatedAt: new Date()},
      {Id:26, roundId: 1, pickNumber:26, teamId:26, createdAt: new Date(),updatedAt: new Date()},
      {Id:27, roundId: 1, pickNumber:27, teamId:5, createdAt: new Date(),updatedAt: new Date()},
      {Id:28, roundId: 1, pickNumber:28, teamId:22, createdAt: new Date(),updatedAt: new Date()},
      {Id:29, roundId: 1, pickNumber:29, teamId:13, createdAt: new Date(),updatedAt: new Date()},
      {Id:30, roundId: 1, pickNumber:30, teamId:25, createdAt: new Date(),updatedAt: new Date()},
      {Id:31, roundId: 1, pickNumber:31, teamId:17, createdAt: new Date(),updatedAt: new Date()},
      {Id:32, roundId: 1, pickNumber:32, teamId:29, createdAt: new Date(),updatedAt: new Date()}
  ],{validate:false});
}








function SeedDraft(database){
    const queryInterface = database.getQueryInterface();
    
    queryInterface.bulkInsert('draft',[
        {Id: 2021, createdAt: new Date(),updatedAt: new Date()}
  ],{validate:false});
}









/*
This seeds our original static db content.
Ideally, we would use seeder files for this (as you see in the project directory structure),
but they stopped working and after days of fighting, I went this route.

This should be a priortiy to refactor back to the use of actual Seeder files and\or Migration Files

for now,......ugly, but this works.

GAJ
*/
async function populateData(database) {

	
	console.log("Starting to seed data");

    try{
        await Promise.all([
                //independent self standing seeds
                SeedTeams(database)
                ,SeedPositions(database)
                ,SeedDraft(database)
            ]).then(() => {
                //seeds that depend on FKs from above seeds
                SeedRounds(database)
                ,SeedTeamNeeds(database)
                ,SeedProspects(database)
            }).then(() => {
                SeedPicks(database)
            }).then(() => {
                console.log('All Seed Files Successfully Executed orchestrated...')
            });
    }
    catch(err) {
        console.error('Err Seeding DB', err);
    };


	


	console.log("All Data Seeded");
	
    
}




	


	

}

module.exports = { applyExtraSetup };