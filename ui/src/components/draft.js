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

		this.state = {
			isLoaded: false,
			AvailableProspects: [],
			Picks: [],
			Needs: [],
			Team: theTeam,
			SessionId: sessionId,
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


	AddMock(sessionId){
		fetch("http://localhost:3000/mocks", {
			"method": "POST",
			"headers": {
				"content-type":"application/json",
				"accept":"application/json"
			},
			"body": JSON.stringify({
				sessionId:this.state.sessionId,
				userId:this.state.userId
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



	addMockSelection(theMockId,thePickId,theProspectId){

		//MockSelection.create(TheMock.Id,p.Id,theProspect.Id);

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
	


	doDraft(e){
		console.log("CLICKY CLICKY ");

		//A: Create New Mock Record For Session
		let TheMock = this.AddMock(this.state.sessionId);

		//#1 get all rounds
		//#2 for each round, get all picks
		let picks = this.state.picks
		
		
		//#3 for Each pick:
		//4A - Inster Into MockSelection

		//#4 //If NOT My Team
				//Select BPA
				const pickItems = picks.map((p) => {
					let theProspect = this.getBPA(this.state.sessionID);
					let ThisMockSelection = this.addMockSelection(TheMock.Id,p.Id,theProspect.Id);
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





	//VERY simple logic that simply grabs the best player still undrafted
	//We currently use ProFootball Focus's List of Prospects for the rankings (www.pff.com)
	getBPA(sessionId){
		//get first player not found in the already picked list
		//players are sorted by value already....first unpicked player is 
		//BPA (Best Player Available) Which allows us a VERY Simplistic way
		//of drafting for now.....(version 1.0)
		fetch("http://localhost:3000/prospects/bpa/:sessionId")
			.then(res => res.json());
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