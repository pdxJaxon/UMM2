import React from 'react'

import AvailableList from './availablelist'





class Draft extends React.Component {
	

	render(){
	
		return (
			<div>
				<AvailableList availableprospects={this.props.availableprospects} />
			</div>
		);
	}


}

export default Draft;