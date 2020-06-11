'use strict';

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
