const express = require('express')
const router = express.Router();

const Draft = require('../models/draft');


router.get('/', async (req, res, next) => {
	try {
		drafts = await Draft.findAll();
		if (drafts.length > 0) {
			return res.json(drafts);
		}
		res.status(404).json({message: "No damn drafts found"});
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
});



router.get('/:draftId', (req,resp,next) => {
	const id = req.params.draftId;
	
	resp.status(200).json({
		message: "draft By ID Retrieved",
		id: id 
	});
	
})







module.exports = router;