'use strict';

const Team = require('../../api/models/team');

module.exports = () => {
    
  return Team.bulkCreate([
    {teamId: 1, abbreviation: 'LA', city:'Los Angeles', nickname: 'Rams'},
    {teamId: 2, abbreviation: 'SEA', city:'Seattle', nickname: 'Seahawks'},
    {teamId: 3, abbreviation: 'AZ', city:'Arizona', nickname: 'Cardinals'},
    {teamId: 4, abbreviation: 'SF', city:'San Francisco', nickname: '49ers'},
    {teamId: 5, abbreviation: 'NO', city:'New Orleans', nickname: 'Saints'},
    {teamId: 6, abbreviation: 'TB', city:'Tampa Bay', nickname: 'Buccaneersw'},
    {teamId: 7, abbreviation: 'CAR', city:'Carolina', nickname: 'Panthers'},
    {teamId: 8, abbreviation: 'ATL', city:'Atlanta', nickname: 'Falcons'},
    {teamId: 9, abbreviation: 'PHI', city:'Philadelphia', nickname: 'Eagles'},
    {teamId: 10, abbreviation: 'NYG', city:'New York', nickname: 'Giants'},
    {teamId: 11, abbreviation: 'DAL', city:'Dallas', nickname: 'Cowboys'},
    {teamId: 12, abbreviation: 'WAS', city:'Washington', nickname: 'Football Team'},
    {teamId: 13, abbreviation: 'GB', city:'Green Bay', nickname: 'Packers'},
    {teamId: 14, abbreviation: 'CHI', city:'Chicago', nickname: 'Bears'},
    {teamId: 15, abbreviation: 'MIN', city:'Minnesota', nickname: 'Vikings'},
    {teamId: 16, abbreviation: 'DET', city:'Detroit', nickname: 'Lions'},
    {teamId: 17, abbreviation: 'BUF', city:'Buffalo', nickname: 'Bills'},
    {teamId: 18, abbreviation: 'MIA', city:'Miami', nickname: 'Dolphins'},
    {teamId: 19, abbreviation: 'NE', city:'New England', nickname: 'Patriots'},
    {teamId: 20, abbreviation: 'NY', city:'New York', nickname: 'Jets'},
    {teamId: 21, abbreviation: 'IND', city:'Indianapolis', nickname: 'Colts'},
    {teamId: 22, abbreviation: 'TEN', city:'Tennessee', nickname: 'Titans'},
    {teamId: 23, abbreviation: 'HOU', city:'Houston', nickname: 'Texans'},
    {teamId: 24, abbreviation: 'JAX', city:'Jacksonville', nickname: 'Jaguars'},
    {teamId: 25, abbreviation: 'PIT', city:'Pittsburgh', nickname: 'Steelers'},
    {teamId: 26, abbreviation: 'CLE', city:'Cleveland', nickname: 'Browns'},
    {teamId: 27, abbreviation: 'BAL', city:'Baltimore', nickname: 'Ravens'},
    {teamId: 28, abbreviation: 'CIN', city:'Cincinnati', nickname: 'Bengals'},
    {teamId: 29, abbreviation: 'KC', city:'Kansas City', nickname: 'Chiefs'},
    {teamId: 30, abbreviation: 'LV', city:'Las Vegas', nickname: 'Raiders'},
    {teamId: 31, abbreviation: 'DEN', city:'Denver', nickname: 'Broncos'},
    {teamId: 32, abbreviation: 'LA', city:'Los Angeles', nickname: 'Chargers'}
  ]);

};