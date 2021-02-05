const express = require('express')
const router = express.Router();

const Pick = require('../models/pick');
const Team = require('../models/team');




router.get('/',async (req,resp,next) => {
	try {
		picks = await Pick.findAll();
		if (picks.length > 0) {
			return resp.json(picks);
		}
		resp.status(404).json({message: "No damn picks found"});
	} catch(err) {
			console.log(err);
			resp.status(500).json({message: "An unexpected error occurred"});
	}
});










module.exports = router;