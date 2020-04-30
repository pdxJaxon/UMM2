const express = require('express')
const router = express.Router();

const Team = require('../models/team');
const mongoose = require('mongoose');

router.get('/',(req,resp,next) => {

	Team.find()
		.where()
		.exec()
		.then(docs => {
			if(docs.length > 0){
				console.log(docs)
				resp.status(200).json(docs);
			}
			else {
				resp.status(404).json({
					message: "Entry Not Found"
				})
			}
			
		})
		.catch(err => {
			console.log(err);
			resp.status(500).json({
				error:err 
		});

	})
});





router.post('/',(req,resp,next) => {

	const team = new Team({
		_id: new mongoose.Types.ObjectId(),
		City: req.body.City,
		Name: req.body.Name
	});

	team
		.save()
		.then(result => {
			console.log(result);
			})
		.catch(err => console.log(err));



	resp.status(201).json({
		message: 'this is posty team',
		status: 'okay',
		Team: team
	});
});





router.get('/:teamId', (req,resp,next) => {
	const id = req.params.teamId;
	
	resp.status(200).json({
		message: "Team By ID Retrieved",
		id: id 
	});
	
})


router.patch('/:teamId', (req,resp,next) => {
	const id = req.params.teamId;
	
	resp.status(200).json({
		message: "Team By ID Updated",
		id: id 
	});
	
})




router.delete('/:teamId', (req,resp,next) => {
	const id = req.params.teamId;
	
	resp.status(200).json({
		message: "Team By ID Deleted",
		id: id 
	});
	
})






module.exports = router;