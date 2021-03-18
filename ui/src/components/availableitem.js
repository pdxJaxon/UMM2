import React from 'react'

class AvailableItem extends React.Component {
	
	constructor(props){
		super(props);


		this.handleClick = this.handleClick.bind(this);
		this.draftPerson = this.draftPerson.bind(this);

	}
	
	handleClick(p,e){
		console.log("CLICK " + p);
		this.draftPerson(p);
	}

	draftPerson(id){
		console.log('draft person ' + id)

		//#1 get next pick for this round
		//#2 Update The ProspectId for the pick

		//#3 Make Sure Prospect is removed from "Available List"
		//#4 Make Sure Pick is Reflected in PicksMadeList
	}

	render(){

		return (
			
			<div>
				<button id={this.props.prospect.Id} onClick={(e) => this.handleClick(this.props.prospect.Id,e)}>Select</button>&nbsp;
				{this.props.prospect.Id + ' ' + this.props.prospect.fname + ' ' + this.props.prospect.lname + ' ' + this.props.prospect.year + ' ' + this.props.prospect.position + ' ' + this.props.prospect.school}
				
			</div>
			

		);
	}


}

export default AvailableItem;