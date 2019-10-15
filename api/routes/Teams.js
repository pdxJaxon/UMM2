const express = require('express')
const router = express.Router();

router.get('/',(req,resp,next) => {
	resp.status(200).json({
		message: 'this is get teams',
		status: 'ok'
	})
});


router.post('/',(req,resp,next) => {
	resp.status(201).json({
		message: 'this is post teams',
		status: 'ok'
	})
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