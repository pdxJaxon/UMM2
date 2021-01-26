import React, {Component} from 'react';
import {
	BrowserRouter as Router, 
	Link,
	withRouter,
	Route,
	Switch
	} from 'react-router-dom';





class TeamItem extends Component {

	constructor(props){
		super(props);

		this.doStuff = (event) => {

		
			let theTeam = event.target.id;
		
			console.log(theTeam);

			let url = "/draft/" + theTeam

		

			this.props.history.push(url);


		};




		
	}
	

	

	render(){

		return (
			<div>
				<button id={this.props.team.abbreviation} onClick={this.doStuff} key={this.props.team.abbreviation}>{this.props.team.city + ' ' + this.props.team.nickname}</button>
			</div>
		);
	}


}

export default withRouter(TeamItem);