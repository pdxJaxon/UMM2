const express = require('express')
const router = express.Router();

router.get('/',(req,resp,next) => {
	resp.status(200).json({
		message: 'this is get draft',
		status: 'ok'
	})
});


router.post('/',(req,resp,next) => {
	resp.status(201).json({
		message: 'this is post draft',
		status: 'ok'
	})
});

router.get('/:draftId', (req,resp,next) => {
	const id = req.params.draftId;
	
	resp.status(200).json({
		message: "draft By ID Retrieved",
		id: id 
	});
	
})


router.patch('/:draftId', (req,resp,next) => {
	const id = req.params.draftId;
	
	resp.status(200).json({
		message: "draft By ID Updated",
		id: id 
	});
	
})




router.delete('/:draftId', (req,resp,next) => {
	const id = req.params.draftId;
	
	resp.status(200).json({
		message: "draft By ID Deleted",
		id: id 
	});
	
})






module.exports = router;