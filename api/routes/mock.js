const express = require('express')
const router = express.Router();

const Mock = require('../models/mock');


router.get('/', async (req, res, next) => {
	try {
		mocks = await Mock.findAll();
		if (mocks.length > 0) {
			return res.json(mocks);
		}
		res.status(404).json({message: "No damn mocks found"});
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
});


//add a mock
router.post(async (req,res)=>{
	theSessionId = req.params.sessionId;
	theUserId = req.params.userId;

	theMock = await Mock.create({sessionId:theSessionId,userId:theUserId});
	return res.json(theMock);
})










module.exports = router;