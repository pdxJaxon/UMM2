const express = require('express')
const router = express.Router();


const TeamNeed = require('../models/teamNeed');
const Team = require('../models/team');
const {models} = require('../../db/index');


router.get('/', async (req, res, next) => {
	try {
		needs = await models.teamNeed.findAll();
		if (needs.length > 0) {
			return res.json(needs);
		}
		res.status(404).json({message: "No FLIPPING team NEEDs found"});
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
});




router.get('/:abbr', async (req,res,next) => {
	const abbr = req.params.abbr;
	

	console.log('NEEDS HERE-->' + abbr)
	try {
		team = await models.team.findOne({
			where: {
				abbreviation: abbr
			},
			include: {model: models.teamNeed}
		});
		if (team === null) {
			res.status(404).json({message: "No FLIPPING team NEEDs found"});
			
		}
		else{
			const needs = await team.getTeamNeeds();
			return res.json(needs);
		}
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
	
	
})









module.exports = router;