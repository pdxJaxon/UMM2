'use strict';

const Round = require('../../api/models/round');

module.exports = () => {
    
  return Round.bulkCreate([
  	{roundId: 1, draftId: 2021},
	{roundId: 2, draftId: 2021},
	{roundId: 3, draftId: 2021},
	{roundId: 4, draftId: 2021},
	{roundId: 5, draftId: 2021},
	{roundId: 6, draftId: 2021},
	{roundId: 7, draftId: 2021}
]);

};