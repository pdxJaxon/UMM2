const express = require('express')
const router = express.Router();

router.get('/',(req,resp,next) => {
	resp.status(200).json({
		message: 'this is get team needs',
		status: 'ok'
	})
});


router.post('/',(req,resp,next) => {
	resp.status(201).json({
		message: 'this is post team needs',
		status: 'ok'
	})
});

router.get('/:teamNeedId', (req,resp,next) => {
	const id = req.params.teamNeedId;
	
	resp.status(200).json({
		message: "TeamNeed By ID Retrieved",
		id: id 
	});
	
})


router.patch('/:teamNeedId', (req,resp,next) => {
	const id = req.params.teamNeedId;
	
	resp.status(200).json({
		message: "Team Need By ID Updated",
		id: id 
	});
	
})




router.delete('/:teamNeedId', (req,resp,next) => {
	const id = req.params.teamNeedId;
	
	resp.status(200).json({
		message: "team need By ID Deleted",
		id: id 
	});
	
})






module.exports = router;