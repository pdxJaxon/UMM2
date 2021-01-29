const express = require('express')
const router = express.Router();


const TeamNeed = require('../models/teamNeed');

router.get('/',(req,resp,next) => {
	resp.status(200).json({
		message: 'this is get team needs',
		status: 'ok'
	})
});




router.get('/:teamId', async (req,resp,next) => {
	const id = req.params.teamId;
	
	try {
		needs = await TeamNeed.findAll({
			where: {teamId:id}
			}
		)
		if (needs.length > 0) {
			return res.json(needs);
		}
		res.status(404).json({message: "No needs found"});
	} catch(err) {
			console.log(err);
			resp.status(500).json({message: "An unexpected error occurred"});
	}
	
})









module.exports = router;