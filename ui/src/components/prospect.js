import React from 'react'

class Prospect extends React.Component {
	

	render(){

		return (
			
			<div>
				{this.props.prospect.fname + ' ' + this.props.prospect.lname + ' ' + this.props.prospect.year + ' ' + this.props.prospect.position + ' ' + this.props.prospect.school}
			</div>
			

		);
	}


}

export default Prospect;