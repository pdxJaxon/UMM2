import React from 'react'

class TeamItem extends React.Component {
	

	render(){

		return (
			<div>
			{this.props.team.city + ' ' + this.props.team.nickname}
			</div>
		);
	}


}

export default TeamItem;