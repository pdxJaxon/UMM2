import React from 'react';
import uuid from 'react-uuid';
import { useHistory, Link, useLocation, BrowserRouter as Router } from 'react-router-dom';
import { useParams } from 'react-router';

import AvailableList from './availablelist'
import PickedList from './pickedprospectslist'
import TeamNeeds from './teamneedslist'



class Draft extends React.Component {

	constructor(props){
		super(props);

		let theTeam = "PIT";
		let sessionId = uuid();

		console.log("Session:" + sessionId);

		this.state = {
			isLoaded: false,
			AvailableProspects: [],
			Picks: [],
			Needs: [],
			Team: theTeam,
			SessionId: sessionId,
			UserId: 0,
			Mock:[],
			CurrentPick:[],
			err: null
		};

		
	}

	componentDidMount(){
		let theTeam = 'PIT';
		this.getProspects();

		this.getTeamNeeds(theTeam);


		this.getAllPicks();


	}



	getProspects(){
		//get available prospects
		fetch("http://localhost:3000/prospects")
			.then(res => res.json())
			.then(
				(result) => {
					console.log("prospects:" + result)
					this.setState({
						isLoaded:true,
						AvailableProspects:result
					});
				},
			(err) => {
				
				this.setState({
					isLoaded: true,
					err: err
				});
			}
		)

	}


	getTeamNeeds(theTeam){
		
		//get favorite teams needs
		//fetch("http://localhost:3000/TeamNeeds/" + theTeam)
		fetch("http://localhost:3000/TeamNeeds/" + theTeam)
			.then((res) => res.json())
			.then(
				(result) => {
					console.log("Needs for me:" + result)
					this.setState({
						isLoaded:true,
						Needs:result
					});	
				},
				(err) => {
				
				this.setState({
					isLoaded: true,
					err: err
				});
				}
			)
	}




	//Get all picks for the Draft
	getAllPicks(){
		fetch("http://localhost:3000/picks")
			.then(res => res.json())
			.then(
				(result) => {
					console.log("Picks are here " + result);
					this.setState({
						isLoaded:true,
						Picks:result
					});
				},
				(err) => {
					this.setState({
						isLoaded: true,
						err: err
					});
				}
			)





	}



	//Add a new Mock Draft for User for this Session\Instance
	AddMock(sessionId,UserId,picks){
		fetch("http://localhost:3000/mocks", {
			"method": "POST",
			"headers": {
				"content-type":"application/json",
				"accept":"application/json"
			},
			"body": JSON.stringify({
				sessionId:sessionId,
				userId:UserId
			})
		})
		.then(res => res.json())
		.then(res => {
			this.setState({Mock:res})
			console.log("I JUST WROTE THIS POS:" + this.state.Mock)
			return res;
			}
		)
		.then(async res => {
			 //for each pick in the draft, add a mockselection record
			 Object.keys(picks).forEach((key)=> {
			 	//console.log(picks[key]);
			 	this.addMockSelection(res.Id,picks[key].Id,null);
			 });
		}
		)
		.then(
			(err) => {
				this.setState({
				isLoaded: true,
				err: err
			});
			}
		)
		


	}


	//Add A Selection for a specific Mock Draft
	addMockSelection(theMockId,thePickId,theProspectId){

		fetch("http://localhost:3000/MockSelections", {
			"method": "POST",
			"headers": {
				"content-type":"application/json",
				"accept":"application/json"
			},
			"body": JSON.stringify({
				mockId:theMockId,
				pickId:thePickId,
				prospectId:theProspectId
			})
		})
		.then(res => res.json())
		.then(
			(err) => {
			
			this.setState({
				isLoaded: true,
				err: err
			});
			}
		)


	}





	//Update the MockSelection with the prospect selected
	updateMockSelection(theMockId,thePickId,theProspectId){

		fetch("http://localhost:3000/MockSelections", {
			"method": "PUT",
			"headers": {
				"content-type":"application/json",
				"accept":"application/json"
			},
			"body": JSON.stringify({
				mockId:theMockId,
				pickId:thePickId,
				prospectId:theProspectId
			})
		})
		.then(res => res.json())
		.then(
			(err) => {
			
			this.setState({
				isLoaded: true,
				err: err
			});
			}
		)


	}



	getMock(sessionId){
		

		//get favorite teams needs
		//fetch("http://localhost:3000/TeamNeeds/" + theTeam)
		fetch("http://localhost:3000/Mocks/Session/" + sessionId)
			.then((res) => { 
				return res.json()
				}
			)
			
	}



	//VERY simple logic that simply grabs the best player still undrafted
	//We currently use ProFootball Focus's List of Prospects for the rankings (www.pff.com)
	getBPA(sessionId){
		//get first player not found in the already picked list
		//players are sorted by value already....first unpicked player is 
		//BPA (Best Player Available) Which allows us a VERY Simplistic way
		//of drafting for now.....(version 1.0)
		fetch("http://localhost:3000/prospects/bpa/" + sessionId)
			.then(res => res.json())
			.then(data =>  {
				this.setState({CurrentPick:data})
			})
	}
	

	


	doDraft(e){
		
		let picks = this.state.Picks

		//A: Create New Mock Record For Session
		this.AddMock(this.state.SessionId,this.state.UserId,picks);
	
		//#1 get all rounds
		//#2 for each round, get all picks
		
		
		
		
		//#3 for Each pick:
		//4A - Inster Into MockSelection

		//#4 //If NOT My Team
				//Select BPA
				const pickItems = picks.map((p) => {
					this.getBPA(this.state.SessionId);
					let theProspect = this.state.CurrentPick;

					console.log("WePicked" + theProspect);
					let ThisMockSelection = this.updateMockSelection(this.state.Mock.Id,p.Id,theProspect.Id);

					//
					p.prospectId = theProspect.Id;
					}
				);
			 //Else
			    //Let User Select
			console.log("did it work? " + pickItems);

		//the Team has already been determined for this pick (by the NFL)
		//We just add a record for this session's mock and indicate which player was selected
		
		//#5 remove BPA From Pool
		//is done automatically becuase they are now in list of player ids in Picks Made

		//#6 update pick
		//#7 Move Pick to "Picked"

		
	}





	




	render(){
	
		return (
			<div>
				<button id="btnDoDraft" onClick={(e) => this.doDraft(e)}>Begin Draft</button>
				<table width="100%" border="1" id="Draft">
					<tbody>
					<tr>
						<td width="50%">
							<AvailableList availableprospects={this.state.AvailableProspects} />
						</td>
						<td width="50%" align="right" valign="top">
							<TeamNeeds needs={this.state.Needs} />
							<hr/>
							<PickedList picks={this.state.Picks} />
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}


}

export default Draft;