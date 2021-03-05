'use strict';

const Position = require('../../api/models/position');

module.exports = () => {
    
  return Position.bulkCreate([
  	{Id: 'QB', name: 'Quarterback', positionPriority:100},
	{Id: 'WR', name: 'Wide Receiver', positionPriority:75},
	{Id: 'TE', name: 'Tight End', positionPriority:60},
	{Id: 'RB', name: 'Running BacK', positionPriority:70},
	{Id: 'FB', name: 'Fullback', positionPriority:30},
	{Id: 'OC', name: 'Center', positionPriority:70},
	{Id: 'OG', name: 'Guard', positionPriority:80},
	{Id: 'OT', name: 'Tackle', positionPriority:85},
	{Id: 'CB', name: 'Cornerback', positionPriority:80},
	{Id: 'S', name: 'Safety', positionPriority:60},
	{Id: 'LB', name: 'Linebacker', positionPriority:75},
	{Id: 'EDGE', name: 'Edge Rusher', positionPriority:90},
	{Id: 'DL', name: 'Defensive Lineman', positionPriority:75},
	{Id: 'K', name: 'Kicker', positionPriority:20},
	{Id: 'P', name: 'Punter', positionPriority:10},
	{Id: 'LS', name: 'Long Snapper', positionPriority:5}
],{validate:false});

};