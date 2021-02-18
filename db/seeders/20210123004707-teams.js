'use strict';

const Team = require('../../api/models/team');

module.exports = () => {
    
  return Team.bulkCreate([
    {Id: 1, abbreviation: 'LAR', city:'Los Angeles', nickname: 'Rams'},
    {Id: 2, abbreviation: 'SEA', city:'Seattle', nickname: 'Seahawks'},
    {Id: 3, abbreviation: 'AZ', city:'Arizona', nickname: 'Cardinals'},
    {Id: 4, abbreviation: 'SF', city:'San Francisco', nickname: '49ers'},
    {Id: 5, abbreviation: 'NO', city:'New Orleans', nickname: 'Saints'},
    {Id: 6, abbreviation: 'TB', city:'Tampa Bay', nickname: 'Buccaneersw'},
    {Id: 7, abbreviation: 'CAR', city:'Carolina', nickname: 'Panthers'},
    {Id: 8, abbreviation: 'ATL', city:'Atlanta', nickname: 'Falcons'},
    {Id: 9, abbreviation: 'PHI', city:'Philadelphia', nickname: 'Eagles'},
    {Id: 10, abbreviation: 'NYG', city:'New York', nickname: 'Giants'},
    {Id: 11, abbreviation: 'DAL', city:'Dallas', nickname: 'Cowboys'},
    {Id: 12, abbreviation: 'WAS', city:'Washington', nickname: 'Football Team'},
    {Id: 13, abbreviation: 'GB', city:'Green Bay', nickname: 'Packers'},
    {Id: 14, abbreviation: 'CHI', city:'Chicago', nickname: 'Bears'},
    {Id: 15, abbreviation: 'MIN', city:'Minnesota', nickname: 'Vikings'},
    {Id: 16, abbreviation: 'DET', city:'Detroit', nickname: 'Lions'},
    {Id: 17, abbreviation: 'BUF', city:'Buffalo', nickname: 'Bills'},
    {Id: 18, abbreviation: 'MIA', city:'Miami', nickname: 'Dolphins'},
    {Id: 19, abbreviation: 'NE', city:'New England', nickname: 'Patriots'},
    {Id: 20, abbreviation: 'NYJ', city:'New York', nickname: 'Jets'},
    {Id: 21, abbreviation: 'IND', city:'Indianapolis', nickname: 'Colts'},
    {Id: 22, abbreviation: 'TEN', city:'Tennessee', nickname: 'Titans'},
    {Id: 23, abbreviation: 'HOU', city:'Houston', nickname: 'Texans'},
    {Id: 24, abbreviation: 'JAX', city:'Jacksonville', nickname: 'Jaguars'},
    {Id: 25, abbreviation: 'PIT', city:'Pittsburgh', nickname: 'Steelers'},
    {Id: 26, abbreviation: 'CLE', city:'Cleveland', nickname: 'Browns'},
    {Id: 27, abbreviation: 'BAL', city:'Baltimore', nickname: 'Ravens'},
    {Id: 28, abbreviation: 'CIN', city:'Cincinnati', nickname: 'Bengals'},
    {Id: 29, abbreviation: 'KC', city:'Kansas City', nickname: 'Chiefs'},
    {Id: 30, abbreviation: 'LV', city:'Las Vegas', nickname: 'Raiders'},
    {Id: 31, abbreviation: 'DEN', city:'Denver', nickname: 'Broncos'},
    {Id: 32, abbreviation: 'LAC', city:'Los Angeles', nickname: 'Chargers'}
  ]);

  console.log('Team Files Successfully Executed...')

};