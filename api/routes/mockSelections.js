const express = require('express')
const router = express.Router();

const MockSelection = require('../models/mockSelection');
const {models} = require('../../db/index');


router.get('/', async (req, res, next) => {
	try {
		mockSelections = await MockSelection.findAll();
		if (mockSelections.length > 0) {
			return res.json(mockSelections);
		}
		res.status(404).json({message: "No damn mock selections found"});
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
});


//add a mockSelection
router.post('/',async (req,res)=>{
	theMockId = req.body.mockId;
	thePickId = req.body.pickId;
	theProspectId = req.body.prospectId;

	try{
		theMockSelection = await models.mockSelection.create({
			mockId:theMockId,
			pickId:thePickId,
			prospectId:theProspectId
		})
		.then((m) => {
			res.json(m);
			console.log("MockSelection Created-->"  + m)
		})
	} catch(err) {
		console.log("WE BLEW UP" + err);
		res.status(500).json({message: "An unexpected error occurred"});
	}
})



//TODO: THIS UPDATE STATEMENT NEEDS TO BE WIRED UP CORRECTLY>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//update a mockSelection
router.put('/',async (req,res)=>{
	theMockId = req.body.mockId;
	thePickId = req.body.pickId;
	theProspectId = req.body.prospectId;
	console.log("Body Contents:" + JSON.stringify(req.body))
	console.log("UPDATING THE SELECTION " + thePickId)

	try{
		await models.mockSelection.update({
			prospectId:theProspectId
		},
		{
			where: {
				mockID:theMockId,
				pickId:thePickId
			}
		}
		)
		.then((m) => {
			res.json(m);
			console.log("MockSelection Updated-->"  + m)
		})
	} catch(err) {
		console.log("WE BLEW UP" + err);
		res.status(500).json({message: "An unexpected error occurred"});
	}
})








module.exports = router;