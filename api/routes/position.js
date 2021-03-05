const express = require('express')
const router = express.Router();

const Position = require('../models/position');


router.get('/', async (req, res, next) => {
	try {
		positions = await Position.findAll();
		if (positions.length > 0) {
			return res.json(positions);
		}
		res.status(404).json({message: "No damn positions found"});
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
});





module.exports = router;