const express = require('express')
const router = express.Router();

const Team = require('../models/team');
const NFLDivision = require('../models/nfldivision');
const TeamNeed = require('../models/teamNeed');

router.get('/',(req,resp,next) => {
	resp.status(200).json({
		message: 'this is get team needs',
		status: 'ok'
	})
});


router.post('/',(req,resp,next) => {
	resp.status(201).json({
		message: 'this is post team needs',
		status: 'ok'
	})
});

router.get('/:teamId', (req,resp,next) => {
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




router.patch('/:teamNeedId', (req,resp,next) => {
	const id = req.params.teamNeedId;
	
	resp.status(200).json({
		message: "Team Need By ID Updated",
		id: id 
	});
	
})




router.delete('/:teamNeedId', (req,resp,next) => {
	const id = req.params.teamNeedId;
	
	resp.status(200).json({
		message: "team need By ID Deleted",
		id: id 
	});
	
})






module.exports = router;