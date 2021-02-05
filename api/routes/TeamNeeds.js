const express = require('express')
const router = express.Router();


const TeamNeed = require('../models/teamNeed');
const Team = require('../models/Team');

router.get('/',(req,resp,next) => {
	resp.status(200).json({
		message: 'this is get team needs',
		status: 'ok'
	})
});




router.get('/:teamId', async (req,res,next) => {
	const id = req.params.teamId;
	let theId = 0;

	console.log('NEEDS HERE-->' + id)
	//get the actual id - we are passed the team abbr
	try {
		Teams = await Team.findAll({
			where: {abbreviation:id}
			}
		)
		if (Teams.length > 0) {
			theId = Teams[0].teamId;
		}
	} catch(e) {
		console.log(e);
			res.status(500).json({message: "An unexpected error occurred"});
		}
	

	
	try {
		needs = await TeamNeed.findAll({
			where: {teamId:theId}
			}
		)
		if (needs.length > 0) {
			return res.json(needs);
		}
		res.status(404).json({message: "No needs found"});
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
	
})









module.exports = router;