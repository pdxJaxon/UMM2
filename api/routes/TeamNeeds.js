const express = require('express')
const router = express.Router();


const TeamNeed = require('../models/teamNeed');
const Team = require('../models/team');



router.get('/', async (req, res, next) => {
	try {
		needs = await TeamNeed.findAll();
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
		const needs = await sequelize.query('SELECT * FROM TeamNeed', {
			model:TeamNeed,
			mapToModel:true
		});
		return res.json(needs);
	} catch(e) {
		console.log(e);
			res.status(500).json({message: "An unexpected error occurred"});
		}
	
	
})









module.exports = router;