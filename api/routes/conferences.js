const express = require('express')
const router = express.Router();

const Conference = require('../models/Conference');

router.get('/', async (req, res, next) => {
	try {
		conferences = await Conference.findAll();
		if (conferences.length > 0) {
			return res.json(conferences);
		}
		res.status(404).json({message: "No conferences found"});
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
});

router.post('/', async (req, res, next) => {
	
	var c = new Conference({
		abbreviation:req.body.abbreviation,
		name:req.body.name
	});

	c.save(function(err,c){

		res.status(201).json(c);

	});

	conferences = await Conference.findAll();
		if (conferences.length > 0) {
			return res.json(conferences);
		}
		
});



router.put('/', async (req, res, next) => {
	
	c = await Conference.findOne({
		where:{id:req.body.id}}).then(function(c){
			c.abbreviation = req.body.abbreviation;
			c.name = req.body.name;

			c.save(function(err,c){
				res.status(201).json(c);

			});

		});

	conferences = await Conference.findAll();
		if (conferences.length > 0) {
			return res.json(conferences);
		}
		
});







module.exports = router;