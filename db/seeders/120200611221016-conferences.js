'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('NFLConference', [{
        NFLConferenceName: 'American Football Conference',
        NFLConferenceAbbreviation: 'AFC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {NFLConferenceName: 'National Football Conference',
        NFLConferenceAbbreviation: 'NFC',
        createdAt: new Date(),
        updatedAt: new Date()
      }
        ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('NFLConference', null, {});
    
  }
};
