import React from 'react'

class AvailableItem extends React.Component {
	
	draftPerson(event){
		console.log('draft')
	}

	render(){

		return (
			
			<div>
				{this.props.prospect.fname + ' ' + this.props.prospect.lname + ' ' + this.props.prospect.year + ' ' + this.props.prospect.position + ' ' + this.props.prospect.school}
				<button id="" onClick="draftPerson()" />
			</div>
			

		);
	}


}

export default AvailableItem;