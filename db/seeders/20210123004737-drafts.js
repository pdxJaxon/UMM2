'use strict';

const Draft = require('../../api/models/draft');

module.exports = () => {
    
  return Draft.bulkCreate([
  {Id: 2021}
],{validate:false});

};