'use strict';

const Draft = require('../../api/models/draft');

module.exports = () => {
    
  return Draft.bulkCreate([
  {draftId: 2021}
]);

};