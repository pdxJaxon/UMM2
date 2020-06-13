'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('NFLDivision', [{
        NFLDivisionName: 'AFC North',
        NFLConferenceId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        NFLDivisionName: 'AFC South',
        NFLConferenceId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        NFLDivisionName: 'AFC East',
        NFLConferenceId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        NFLDivisionName: 'AFC West',
        NFLConferenceId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        NFLDivisionName: 'NFC North',
        NFLConferenceId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        NFLDivisionName: 'NFC South',
        NFLConferenceId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        NFLDivisionName: 'NFC East',
        NFLConferenceId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        NFLDivisionName: 'NFC West',
        NFLConferenceId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('NFLDivision', null, {});
    
  }
};
