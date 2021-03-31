import React from 'react'

class NeedItem extends React.Component {
	
	constructor(props){
		super(props);

	}
		
	

	render(){

		return (
			
			<div>
				{this.props.need.positionId + ' ' + this.props.need.needScore}
			</div>
			

		);
	}


}

export default NeedItem;