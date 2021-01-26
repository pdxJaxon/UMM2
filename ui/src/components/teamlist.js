import React from 'react'
import {withRouter} from 'react-router-dom';

import TeamItem from './teamitem'




class TeamList extends React.Component {
	

	render(){
		

		return (
			<div className="teamList">
			<h1>Select The Team You Wish To Draft For</h1>
				{this.props.teams.map((theTeam)=>(
					<TeamItem key={theTeam.abbreviation} history={this.props.history} team={theTeam} />
				))}
			</div>
			
		);
	}


}

export default withRouter(TeamList);