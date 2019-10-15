const express = require('express')
const router = express.Router();

const Prospect = require('../models/prospect');
const mongoose = require('mongoose');

router.get('/',(req,resp,next) => {
	resp.status(200).json({
		message: 'this is get prospects',
		status: 'ok'
	})
});


router.post('/',(req,resp,next) => {

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

	prospect.save().then(result => {
		console.log(result);
	})
	.catch(err => console.log(err));



	/*const FName = req.body.FName;
	const LName = req.body.LName;
	const College = req.body.College;
	const Position = req.body.Position;
	const Height = req.body.Height;
	const Weight = req.body.Weight;
	const Arms = req.body.Arms;
	const Hands = req.body.Hands;
	const Age = req.body.Age;
	const Year = req.body.Year;
	const SparqScore = req.body.SparqScore;
	const UMMScore = req.body.UMMScore;
	const NFLGrade = req.body.NFLGrade;
	const CombineResults = req.body.CombineResults;
	const Derogs = req.body.Derogs;
	const Visits = req.body.Visits;*/


	/*console.log(FName);
	console.log(LName);
	console.log(College);
	console.log(Position);
	console.log(Height);
	console.log(Weight);
	console.log(Arms);
	console.log(Hands);
	console.log(Age);
	console.log(SparqScore);
	console.log(UMMScore);
	console.log(NFLGrade);
	console.log(CombineResults);
	console.log(Derogs);
	console.log(Visits);*/

	resp.status(201).json({
		message: 'this is posty prospects',
		status: 'okay',
		Prospect: prospect
	});
});

router.get('/:prospectId', (req,resp,next) => {
	const id = req.params.prospectId;
	
	resp.status(200).json({
		message: "Prospect By ID Retrieved",
		id: id 
	});
	
})


router.patch('/:prospectId', (req,resp,next) => {
	const id = req.params.prospectId;
	
	resp.status(200).json({
		message: "Prospect By ID Updated",
		id: id 
	});
	
})




router.delete('/:prospectId', (req,resp,next) => {
	const id = req.params.prospectId;
	
	resp.status(200).json({
		message: "Prospect By ID Deleted",
		id: id 
	});
	
})






module.exports = router;

