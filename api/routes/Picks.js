const express = require('express')
const router = express.Router();

router.get('/',(req,resp,next) => {
	resp.status(200).json({
		message: 'this is get picks',
		status: 'ok'
	})
});


router.post('/',(req,resp,next) => {
	resp.status(201).json({
		message: 'this is post picks',
		status: 'ok'
	})
});

router.get('/:pickId', (req,resp,next) => {
	const id = req.params.pickId;
	
	resp.status(200).json({
		message: "pick By ID Retrieved",
		id: id 
	});
	
})


router.patch('/:pickId', (req,resp,next) => {
	const id = req.params.pickId;
	
	resp.status(200).json({
		message: "pick By ID Updated",
		id: id 
	});
	
})




router.delete('/:pickId', (req,resp,next) => {
	const id = req.params.pickId;
	
	resp.status(200).json({
		message: "pick By ID Deleted",
		id: id 
	});
	
})






module.exports = router;