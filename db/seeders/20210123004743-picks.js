'use strict';

const Pick = require('../../api/models/pick');

module.exports = () => {
    
  return Pick.bulkCreate([
  {Id:1, roundId: 1, pickNumber:1, teamId:24},
  {Id:2, roundId: 1, pickNumber:2, teamId:20},
  {Id:3, roundId: 1, pickNumber:3, teamId:28},
  {Id:4, roundId: 1, pickNumber:4, teamId:8},
  {Id:5, roundId: 1, pickNumber:5, teamId:7},
  {Id:6, roundId: 1, pickNumber:6, teamId:18},
  {Id:7, roundId: 1, pickNumber:7, teamId:9},
  {Id:8, roundId: 1, pickNumber:8, teamId:32},
  {Id:9, roundId: 1, pickNumber:9, teamId:11},
  {Id:10, roundId: 1, pickNumber:10, teamId:10},
  {Id:11, roundId: 1, pickNumber:11, teamId:16},
  {Id:12, roundId: 1, pickNumber:12, teamId:4},
  {Id:13, roundId: 1, pickNumber:13, teamId:31},
  {Id:14, roundId: 1, pickNumber:14, teamId:15},
  {Id:15, roundId: 1, pickNumber:15, teamId:19},
  {Id:16, roundId: 1, pickNumber:16, teamId:14},
  {Id:17, roundId: 1, pickNumber:17, teamId:30},
  {Id:18, roundId: 1, pickNumber:18, teamId:27},
  {Id:19, roundId: 1, pickNumber:19, teamId:12},
  {Id:20, roundId: 1, pickNumber:20, teamId:3},
  {Id:21, roundId: 1, pickNumber:21, teamId:18},
  {Id:22, roundId: 1, pickNumber:22, teamId:24},
  {Id:23, roundId: 1, pickNumber:23, teamId:6},
  {Id:24, roundId: 1, pickNumber:24, teamId:20},
  {Id:25, roundId: 1, pickNumber:25, teamId:21},
  {Id:26, roundId: 1, pickNumber:26, teamId:26},
  {Id:27, roundId: 1, pickNumber:27, teamId:5},
  {Id:28, roundId: 1, pickNumber:28, teamId:22},
  {Id:29, roundId: 1, pickNumber:29, teamId:13},
  {Id:30, roundId: 1, pickNumber:30, teamId:25},
  {Id:31, roundId: 1, pickNumber:31, teamId:17},
  {Id:32, roundId: 1, pickNumber:32, teamId:29}
  ],{validate:false});
  console.log('Pick Seed Files Successfully Executed...')
};