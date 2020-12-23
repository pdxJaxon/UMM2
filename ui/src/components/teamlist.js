import React from 'react'

import TeamItem from './teamitem'




class TeamList extends React.Component {
	

	render(){

		return (
			<div>
			{this.props.teams.map((theTeam)=>(
				<TeamItem key={theTeam.abbreviation} team={theTeam}/>
			))}
			</div>
		);
	}


}

export default TeamList;