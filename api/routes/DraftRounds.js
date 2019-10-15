const express = require('express')
const router = express.Router();

router.get('/',(req,resp,next) => {
	resp.status(200).json({
		message: 'this is get Round',
		status: 'ok'
	})
});


router.post('/',(req,resp,next) => {
	resp.status(201).json({
		message: 'this is post round',
		status: 'ok'
	})
});

router.get('/:roundId', (req,resp,next) => {
	const id = req.params.roundId;
	
	resp.status(200).json({
		message: "round By ID Retrieved",
		id: id 
	});
	
})


router.patch('/:roundId', (req,resp,next) => {
	const id = req.params.roundId;
	
	resp.status(200).json({
		message: "round By ID Updated",
		id: id 
	});
	
})




router.delete('/:roundId', (req,resp,next) => {
	const id = req.params.roundId;
	
	resp.status(200).json({
		message: "round By ID Deleted",
		id: id 
	});
	
})






module.exports = router;