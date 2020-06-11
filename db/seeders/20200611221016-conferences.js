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
