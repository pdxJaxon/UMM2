const express = require('express')
const router = express.Router();

const Prospect = require('../models/prospect');
const mongoose = require('mongoose');

router.get('/',(req,resp,next) => {

	Prospect.find()
		.where()
		.exec()
		.then(docs => {
			console.log(docs)
			resp.status(200).json(docs);
		})
		.catch(err => {
			console.log(err);
			resp.status(500).json({
				error:err 
		});

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

	prospect
		.save()
		.then(result => {
			console.log(result);
			})
		.catch(err => console.log(err));



	resp.status(201).json({
		message: 'this is posty prospects',
		status: 'okay',
		Prospect: prospect
	});
});

router.get('/:prospectId', (req,resp,next) => {
	const id = req.params.prospectId;

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
	
	resp.status(200).json({
		message: "Prospect By ID Updated",
		id: id 
	});
	
})




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

