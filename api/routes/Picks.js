const express = require('express')
const router = express.Router();


function getTeamForPick(Pickid){
	GetPick()

	Get TeamByID()
	
	return Team;
}


//this is the primary engine logic for each actual pick of the draft.
function MakePick(PickId){

	var Team = getTeamForPick();

	//get team needs
	var teamNeeds = []

	//get available prospects
	var availableProspects = []

	//Keep track of potential candidates for this team
	var PotentialPicks = []

	for(const n in TeamNeeds){
		//get max reach for this position of need and this round
		var maxReach = GetMaxReach(TeamId,NeedId,RoundId)

		//check to see if there is a player available within max reach


		//each available player within the max reach range that is of this position will be added to the list of potential picks

	}

	//if potential picks still empty
	//add top 3 available players and top player at each position of need regardless of maxreach 


	//for each potential pick, we need to make sure a weighted average of probability is set....

	//then psuedo-randomize by picking a number and matching it to the probability for pick....

	//write the picked prospect to the pick table for this pick #

	return ProspectID

}




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