'use strict';

const Position = require('../../api/models/position');

module.exports = () => {
    
  return Draft.bulkCreate([
  	{abbreviation: 'QB', name: 'Quarterback', positionPriority:100},
	{abbreviation: 'WR', name: 'Wide Receiver', positionPriority:75},
	{abbreviation: 'TE', name: 'Tight End', positionPriority:60},
	{abbreviation: 'RB', name: 'Running BacK', positionPriority:70},
	{abbreviation: 'FB', name: 'Fullback', positionPriority:30},
	{abbreviation: 'OLC', name: 'Center', positionPriority:70},
	{abbreviation: 'OLG', name: 'Guard', positionPriority:80},
	{abbreviation: 'OLT', name: 'Tackle', positionPriority:85},
	{abbreviation: 'CB', name: 'Cornerback', positionPriority:80},
	{abbreviation: 'S', name: 'Safety', positionPriority:60},
	{abbreviation: 'LB', name: 'Linebacker', positionPriority:75},
	{abbreviation: 'Edge', name: 'Edge Rusher', positionPriority:90},
	{abbreviation: 'DL', name: 'Defensive Lineman', positionPriority:75},
	{abbreviation: 'K', name: 'Kicker', positionPriority:20},
	{abbreviation: 'P', name: 'Punter', positionPriority:10},
	{abbreviation: 'LS', name: 'Long Snapper', positionPriority:5}
]);

};