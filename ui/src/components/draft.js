import React from 'react';
import { useHistory } from 'react-router-dom';


import AvailableList from './availablelist'
import PickedList from './pickedprospectslist'
import TeamNeeds from './teamneedslist'





class Draft extends React.Component {

	constructor(props){
		super(props);


		this.state = {
			isLoaded: false,
			AvailableProspects: [],
			Picks: [],
			Needs: [],
			err: null
		}

		
	}


	componentDidMount() {
		fetch("http://localhost:3000/prospects")
			.then(res => res.json())
			.then(
				(result) => {
					console.log("Got Back:" + result);
					this.setState({
						isLoaded:true,
						AvailableProspects:result.prospects
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
				<table id="Draft">
					<tbody>
					<tr>
						<td width="50%">
							<AvailableList availableprospects={this.state.AvailableProspects} />
						</td>
						<td width="50%" align="right" valign="top">
							<TeamNeeds needs={this.props.teamNeeds} />
							<PickedList picks={this.props.picks} />
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}


}

export default Draft;