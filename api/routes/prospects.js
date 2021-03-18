const express = require('express')
const router = express.Router();

const Prospect = require('../models/prospect');
const {models} = require('../../db/index');
const {Op} = require("sequelize");


router.get('/', async (req, res, next) => {
	try {
		prospects = await models.prospect.findAll();
		if (prospects.length > 0) {
			return res.json(prospects);
		}
		res.status(404).json({message: "No Prospects found"});
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
});


router.get('/bpa/:sessionId', async (req, res, next) => {
	try {
		theMock = await models.mock.findOne({
			where: {sessionId:theSessionId}
		})
		.then()
		prospect = await models.prospect.findOne({
			where: {
				[Op.not]: [
					{Id:[theMock.mockSelections.prospectId]}
				]
			}
		});
		if (prospects.length > 0) {
			return res.json(prospects);
		}
		res.status(404).json({message: "No Prospects found"});
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
});



router.post('/', async (req, res, next) => {
	
	var p = new Prospect({
		abbreviation:req.body.abbreviation,
		city:req.body.city,
		nickname:req.body.nickname
	});

	p.save(function(err,t){

		res.status(201).json(p);

	});

	prospects = await Prospect.findAll();
		if (prospects.length > 0) {
			return res.json(prospects);
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





router.post('/',(req,resp,next) => {
/*
	const prospect = new Prospect({
		_id: new mongoose.Types.ObjectId(),
		FName: req.body.FName,
		LName: req.body.LName,
		Age: req.body.Age,
		College: req.body.College,
		Position: req.body.Position,
		Height: req.body.Height,
		Weight: req.body.Weight,
		Arms: req.body.Arms,
		Hands: req.body.Hands,
		Year: req.body.Year,
		SparqScore: req.body.SparqScore,
		UMMScore: req.body.UMMScore,
		NFLGrade: req.body.NFLGrade,
		CombineResults: req.body.CombineResults,
		Derogs: req.body.Derogs,
		Visits: req.body.Visits
	});

	prospect
		.save()
		.then(result => {
			console.log(result);
			})
		.catch(err => console.log(err));


*/
	resp.status(201).json({
		message: 'this is posty prospects',
		status: 'okay',
		Prospect: prospect
	});
});

router.get('/:prospectId', (req,resp,next) => {
	const id = req.params.prospectId;
/*
	console.log("Valid",mongoose.Types.ObjectId.isValid(id));
	
	Prospect.findById(id)
		.exec()
		.then(data =>{
			resp.status(200).json(data);	
		})
		.catch(err =>{
			resp.status(500).json({
				Message:err,
				id:id,
				Valid:mongoose.Types.ObjectId.isValid(id)})
		});
*/
	// console.log("ONE")
	// myQry = Prospect.find();
	// console.log("TWO")

	// myQry.exec((err,data) => {
	// 	console.log("THREE")
	// 	resp.status(200).json(data)
	// }
	// );

	

})
	
	
	




router.patch('/:prospectId', (req,resp,next) => {
	const id = req.params.prospectId;
	const updateOps = {};

	for (const [key,value] of Object.entries(req.body)) {
		updateOps[key] = value;
	}

	Prospect.update({ _id: id },{ $set: updateOps })
		.exec()
		.then(result => {
			console.log(result);
			resp.status(200).json(result);				
		})
		.catch(err => {
			console.log(err);
			resp.status(500).json({
				Error: err
			})
		});
	
});




router.delete('/:prospectId', (req,resp,next) => {
	const id = req.params.prospectId;
	
	Prospect.remove({_id: id})
	.exec()
	.then(result => {
		resp.status(200).json(result);
	})
	.catch(e => {
		console.log(e);
		resp.status(500).json({Error:e})
	});
	
});



module.exports = router;

