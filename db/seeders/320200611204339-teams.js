'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('NFLConference', [{
        NFLConferenceName: 'American Football Conference',
        NFLConferenceAbbreviation: 'AFC'
      },
      {NFLConferenceName: 'National Football Conference',
        NFLConferenceAbbreviation: 'NFC'}], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('NFLConference', null, {});
    
  }
};


module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('NFLDivision', [{
        NFLDivisionName: 'AFC North',
        NFLConferenceId: 1
      },
      {
        NFLDivisionName: 'AFC South',
        NFLConferenceId: 1
      },
      {
        NFLDivisionName: 'AFC East',
        NFLConferenceId: 1
      },
      {
        NFLDivisionName: 'AFC West',
        NFLConferenceId: 1
      },
      {
        NFLDivisionName: 'NFC North',
        NFLConferenceId: 2
      },
      {
        NFLDivisionName: 'NFC South',
        NFLConferenceId: 2
      },
      {
        NFLDivisionName: 'NFC East',
        NFLConferenceId: 2
      },
      {
        NFLDivisionName: 'NFC West',
        NFLConferenceId: 2
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('NFLDivision', null, {});
    
  }
};



module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('team', [{
        abbreviation: 'PIT',
        city: 'Pittsburgh',
        nickname:'Steelers',
        NFLDivisionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {abbreviation: 'ARI',
        city: 'Arizona',
        nickname:'Cardinals',
        NFLDivisionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'BAL',
        city: 'Baltimore',
        nickname:'Ravens',
        NFLDivisionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'CAR',
        city: 'Carolina',
        nickname:'Panthers',
        NFLDivisionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'CIN',
        city: 'Cincinnati',
        nickname:'Bengals',
        NFLDivisionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'ATL',
        city: 'Atlanta',
        nickname:'Falcons',
        NFLDivisionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'BUF',
        city: 'Buffalo',
        nickname:'Bills',
        NFLDivisionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'CHI',
        city: 'Chicago',
        nickname:'Bears',
        NFLDivisionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'CLE',
        city: 'Cleveland',
        nickname:' Browns',
        NFLDivisionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'DAL',
        city: 'Dallas',
        nickname:'Cowboys',
        NFLDivisionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'DEN',
        city: 'Denver',
        nickname:'Broncos',
        NFLDivisionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'DET',
        city: 'Detroit',
        nickname:'Lions',
        NFLDivisionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'HOU',
        city: 'Houston',
        nickname:'Texans',
        NFLDivisionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'GRB',
        city: 'Greenbay',
        nickname:'Packers',
        NFLDivisionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'IND',
        city: 'Indianapolis',
        nickname:'Colts',
        NFLDivisionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'LAR',
        city: 'Los Angeles',
        nickname:'Rams',
        NFLDivisionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'JAX',
        city: 'Jacksonville',
        nickname:'Jaguars',
        NFLDivisionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'MIN',
        city: 'Minnesota',
        nickname:'Vikings',
        NFLDivisionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'KC',
        city: 'Kansas City',
        nickname:'Chiefs',
        NFLDivisionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'NO',
        city: 'New Orleans',
        nickname:'Saints',
        NFLDivisionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'LV',
        city: 'Las Vegas',
        nickname:'Raiders',
        NFLDivisionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'NYG',
        city: 'New York',
        nickname:'Giants',
        NFLDivisionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'PHI',
        city: 'Philadelphia',
        nickname:'Eagles',
        NFLDivisionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'LAC',
        city: 'Los Angeles',
        nickname:'Chargers',
        NFLDivisionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'MIA',
        city: 'Miami',
        nickname:'Dolphins',
        NFLDivisionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'SFO',
        city: 'San Francisco',
        nickname:'49ers',
        NFLDivisionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'NE',
        city: 'New England',
        nickname:'Patriots',
        NFLDivisionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'NYJ',
        city: 'New York',
        nickname:'Jets',
        NFLDivisionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'SEA',
        city: 'Seattle',
        nickname:'Seahawks',
        NFLDivisionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'TB',
        city: 'Tampa Bay',
        nickname:'Buccaneers',
        NFLDivisionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'WAS',
        city: 'Washington',
        nickname:'Redskins',
        NFLDivisionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()},
      {abbreviation: 'TEN',
        city: 'Tennessee',
        nickname:'Titans',
        NFLDivisionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()},
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teams', null, {});
    
  }
};
