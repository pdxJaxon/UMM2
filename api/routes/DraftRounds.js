const express = require('express')
const router = express.Router();


const Round = require('../models/round');


router.get('/', async (req, res, next) => {
	try {
		rounds = await Round.findAll();
		if (rounds.length > 0) {
			return res.json(rounds);
		}
		res.status(404).json({message: "No damn rounds found"});
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
});




router.get('/:roundId', (req,resp,next) => {
	const id = req.params.roundId;
	
	resp.status(200).json({
		message: "round By ID Retrieved",
		id: id 
	});
	
})




module.exports = router;