import React from 'react';
import { useHistory, Link, useLocation, BrowserRouter as Router } from 'react-router-dom';
import { useParams } from 'react-router';

import AvailableList from './availablelist'
import PickedList from './pickedprospectslist'
import TeamNeeds from './teamneedslist'



class Draft extends React.Component {

	constructor(props){
		super(props);

		let theTeam = "PIT";

		this.state = {
			isLoaded: false,
			AvailableProspects: [],
			Picks: [],
			Needs: [],
			Team: theTeam,
			err: null
		};


		


		
	}

	componentDidMount(){
		
		let theTeam = this.state.Team;

		console.log("TEAM READ:" + theTeam);
		
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


		//get favorite teams needs
		fetch("http://localhost:3000/TeamNeeds/" + theTeam)
			.then(res => res.json())
			.then(
				(result) => {
					console.log("Needs:" + result)
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

	
	handleClick(e){
		console.log("CLICK ");
		
	}



	render(){
	
		return (
			<div>
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