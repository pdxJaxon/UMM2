const express = require('express')
const router = express.Router();

const Team = require('../models/team');
const NFLDivision = require('../models/nfldivision');

Team.belongsTo(NFLDivision,{
	foreignKey: "NFLDivisionId"
});

router.get('/', async (req, res, next) => {
	try {
		teams = await Team.findAll();
		if (teams.length > 0) {
			return res.json(teams);
		}
		res.status(404).json({message: "No teams found"});
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
});



router.get('/abbr/:abbr', async (req, res, next) => {
	try {
		teams = await Team.findAll({
			limit:1,
			where: {abbreviation:abbr}
			}
			)
		if (teams.length > 0) {
			return res.json(teams);
		}
		res.status(404).json({message: "No teams found"});
	} catch(err) {
			console.log(err);
			resp.status(500).json({message: "An unexpected error occurred"});
	}
});


router.get('/id/:id', async (req, res, next) => {
	try {
		teams = await Team.findAll({
			limit:1,
			where:{TeamId:id}
		}
			)
		if (teams.length > 0) {
			return res.json(teams);
		}
		res.status(404).json({message: "No teams found"});
	} catch(err) {
			console.log(err);
			resp.status(500).json({message: "An unexpected error occurred"});
	}
});

router.post('/', async (req, res, next) => {
	
	var t = new Team({
		abbreviation:req.body.abbreviation,
		city:req.body.city,
		nickname:req.body.nickname
	});

	t.save(function(err,t){

		res.status(201).json(t);

	});

	teams = await Team.findAll();
		if (teams.length > 0) {
			return res.json(teams);
		}
		
});



router.put('/', async (req, res, next) => {
	
	t = await Team.findOne({
		where:{id:req.body.id}}).then(function(t){
			t.abbreviation = req.body.abbreviation;
			t.city = req.body.city;
			t.nickname = req.body.nickname;

			t.save(function(err,t){
				res.status(201).json(t);

			});

		});

	teams = await Team.findAll();
		if (teams.length > 0) {
			return res.json(teams);
		}
		

});

module.exports = router;






