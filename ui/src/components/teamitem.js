import React from 'react'

class TeamItem extends React.Component {

	doStuff(event){
		let selection = event.target.href;
		let endWack = selection.lastIndexOf('/');
		let theTeam = selection.substring(endWack+1,selection.length)
		event.preventDefault();
		
		console.log(theTeam);

	}
	

	render(){

		return (
			<div>
			<a onClick={this.doStuff.bind(this)} key={this.props.team.abbreviation} href={this.props.team.abbreviation}>{this.props.team.city + ' ' + this.props.team.nickname}</a>
			</div>
		);
	}


}

export default TeamItem;