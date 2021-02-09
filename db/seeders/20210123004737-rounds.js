'use strict';

const Round = require('../../api/models/round');

module.exports = () => {
    
  return Draft.bulkCreate([
  	{roundId: 1, draftId: 1},
	{roundId: 2, draftId: 1},
	{roundId: 3, draftId: 1},
	{roundId: 4, draftId: 1},
	{roundId: 5, draftId: 1},
	{roundId: 6, draftId: 1},
	{roundId: 7, draftId: 1}
]);

};