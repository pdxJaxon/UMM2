'use strict';

module.exports = {   
  up: (queryInterface, Sequelize) => {     
    return queryInterface.sequelize.transaction(t => {       
      return Promise.all([         
        queryInterface.createTable('NFLConference', 
          {           
            NFLConferenceId: {
              type: Sequelize.DataTypes.INTEGER,
              primaryKey:true,
              autoincrement:true
            },
            NFLConferenceName: Sequelize.DataTypes.STRING,
            NFLConferenceAbbreviation: Sequelize.DataTypes.STRING
          }, { transaction: t }),
        queryInterface.createTable('NFLDivision', 
          {           
            NFLDivisionId: {
              type: Sequelize.DataTypes.INTEGER,
              primaryKey:true,
              autoincrement:true
            },
            NFLConferenceId: {
              type: Sequelize.DataTypes.INTEGER,
              references: {
                model: {
                  tableName: 'NFLConference',
                  schema: 'schema'
                },
                key: 'NFLConferenceId'
              },
              allowNull:false
            },
            NFLDivisionName: Sequelize.DataTypes.STRING
          }, { transaction: t }),
        queryInterface.createTable('team', 
          {           
            teamId: {
              type: Sequelize.DataTypes.INTEGER,
              primaryKey:true,
              autoincrement:true
            },
            NFLDivisionId: {
              type: Sequelize.DataTypes.INTEGER,
              references: {
                model: {
                  tableName: 'NFLDivision',
                  schema: 'schema'
                },
                key: 'NFLDivisionId'
              },
              allowNull:false
            },
            abbreviation: {
              type: Sequelize.DataTypes.STRING,
              allowNull:false
            },
            city: {
              type: Sequelize.DataTypes.STRING,
              allowNull:false
            },
            nickname: {
              type: Sequelize.DataTypes.STRING,
              allowNull:false
            },
          }, { transaction: t })
        ]);     
    });   
  },   
  down: (queryInterface, Sequelize) => {     
    return queryInterface.sequelize.transaction(t => {       
      return Promise.all([ 
        queryInterface.dropTable('team',{ transaction: t}),        
        queryInterface.dropTable('NFLDivision',{ transaction: t }),
        queryInterface.dropTable('NFLConference',{ transaction: t })      
        ]);     
    });   
  }};