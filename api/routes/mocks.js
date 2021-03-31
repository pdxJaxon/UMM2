const express = require('express')
const router = express.Router();

const Mock = require('../models/mock');
const {models} = require('../../db/index');



router.get('/', async (req, res, next) => {
	try {
		mocks = await models.mock.findAll();
		if (mocks.length > 0) {
			return res.json(mocks);
		}
		res.status(404).json({message: "No damn mocks found"});
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
});




//get model by sessionId
router.get('/session/:sessionId', async (req, res, next) => {
	const sessionId = req.params.sessionId;
	console.log("Mock Get sessionId:" + sessionId)
	try {
		mock = await models.mock.findOne({
			where: {
				sessionId: sessionId
			}
		});
		if (mock === null) {
			res.status(404).json({message: "No FLIPPING mock found"});
			
		}
		else{
			console.log("we got our mock back " + mock)
			return res.json(mock);
		}
	} catch(err) {
			console.log(err);
			res.status(500).json({message: "An unexpected error occurred"});
	}
});







//add a mock
router.post('/',async (req,res)=>{
	theSessionId = req.body.sessionId;
	theUserId = req.body.userId;

	console.log("Trying to create mock for session:" + theSessionId)
	
	try{
		theMock = await models.mock.create({
			sessionId:theSessionId,
			userId:theUserId
		})
		.then((m) => {
			res.json(m);
			console.log("Mock Created-->"  + m)
		})
	} catch(err) {
		console.log("WE BLEW UP" + err);
		res.status(500).json({message: "An unexpected error occurred"});
	}
})










module.exports = router;