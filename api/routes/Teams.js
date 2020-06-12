const express = require('express')
const router = express.Router();

const Team = require('../models/Team');
const NFLDivision = require('../models/NFLDivision');

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
			resp.status(500).json({message: "An unexpected error occurred"});
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



module.exports = router;
