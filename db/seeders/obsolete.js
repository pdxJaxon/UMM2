'use strict';

const Prospect = require('../../api/models/prospect');

module.exports = () => {
    
  return Prospect.bulkCreate([
  {"prospectId":50, "fname": "Jamie", "lname":"Newman", "positionId":"QB","year":"FR","schoolId":1,"height":"","weight":""}  
]);
console.log('Prospect Seed Files Successfully Executed...')
};
