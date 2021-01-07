const express = require('express')
const router = express.Router();

const Pick = require('./models/pick');
const Team = require('./models/team');




function getPickByPickId(pickId){
	//get the pick for the id that was passed in
	var pick = await Pick.findAll({
		where: {
			PickId: PickId
		}
	});

	return pick;
}





function getTeamForPick(Pickid){



	//get the pick for the id that was passed in
	var pick getPickByPickId(PickId);

	//for this pick in the draft, lets get the team who is picking
	var team = await Team.findAll({
		where: {
			teamId: pick.teamId
		}
	});
	
	return team;
}





//this is the primary engine logic for each actual pick of the draft.
function MakePick(PickId){

	//lets find out who's pick it is
	var Team = getTeamForPick();

	//get team needs for this team....
	var teamNeeds = Team.getTeamNeeds();


	//get available prospects
	var availableProspects = []


	//Keep track of potential candidates for this team
	var PotentialPicks = []


	for(const n in TeamNeeds){

		//get max reach for this position of need and this round
		var maxReach = getMaxReach(TeamId,NeedId,RoundId)

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

function getMaxReach(TeamId,NeedId,RoundId){
	var maxReach = 0;

	switch(RoundId){
		case 1:
			maxReach = 15;
			break;
		case 2:
			maxReach = 20;
			break;
		case 3:
		case 4:
			maxreach = 25;
			break;
		case 5:
		case 6:
			maxReach = 35;
			break
		default:
			maxReach = 300;
	}

	return maxReach;
}




router.get('/',(req,resp,next) => {
	resp.status(200).json({
		message: 'this is get picks',
		status: 'ok'
	})

	return await Pick.findAll();
});



router.get('/:pickId', (req,resp,next) => {
	const id = req.params.pickId;
	
	resp.status(200).json({
		message: "pick By ID Retrieved",
		id: id 
	});
	
})

//This is the entry point for a new pick
router.patch('/:pickId', (req,resp,next) => {
	const id = req.params.pickId;
	
	//get the pick
	var pick = getPickByPickId(id);

	//go figure out who is going to be picked
	var ProspectId = MakePick(id);



	//SET New ProspectId in the model
	pick.prospectId = ProspectId;
	await pick.save();


	resp.status(200).json({
		message: "pick By ID Updated",
		id: id 
	});
	
})









module.exports = router;