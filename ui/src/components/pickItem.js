import React from 'react'

class PickItem extends React.Component {
	

	render(){

		return (
			
			<div>
				{this.props.pick.pickId}
			</div>
			

		);
	}


}

export default PickItem;