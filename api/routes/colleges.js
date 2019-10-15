const express = require('express')
const router = express.Router();

router.get('/',(req,resp,next) => {
	resp.status(200).json({
		message: 'this is get colleges',
		status: 'ok'
	})
});


router.post('/',(req,resp,next) => {
	resp.status(201).json({
		message: 'this is post colleges',
		status: 'ok'
	})
});

router.get('/:collegeId', (req,resp,next) => {
	const id = req.params.collegeId;
	
	resp.status(200).json({
		message: "college By ID Retrieved",
		id: id 
	});
	
})


router.patch('/:collegeId', (req,resp,next) => {
	const id = req.params.collegeId;
	
	resp.status(200).json({
		message: "College By ID Updated",
		id: id 
	});
	
})




router.delete('/:collegeId', (req,resp,next) => {
	const id = req.params.collegeId;
	
	resp.status(200).json({
		message: "College By ID Deleted",
		id: id 
	});
	
})






module.exports = router;