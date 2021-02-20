'use strict';

const Round = require('../../api/models/round');

module.exports = () => {
    
  return Round.bulkCreate([
  	{Id: 1, draftId: 2021},
	{Id: 2, draftId: 2021},
	{Id: 3, draftId: 2021},
	{Id: 4, draftId: 2021},
	{Id: 5, draftId: 2021},
	{Id: 6, draftId: 2021},
	{Id: 7, draftId: 2021}
],{validate:false});

};