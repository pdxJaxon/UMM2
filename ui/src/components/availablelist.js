import React from 'react'

import AvailableItem from './availableitem'





class AvailableList extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			isLoaded: false,
			AvailableProspects: [],
			Picks: [],
			Needs: [],
			err: null
		}

		
	}



	
	

	render(){
		console.log(this.props)
		return (
			<div>
				

			<div className="availableList">
				{this.props.availableprospects.map((theProspect)=>(
					<AvailableItem key={theProspect.fname+theProspect.lname+theProspect.school} prospect={theProspect} />
				))}
			</div>


			</div>
		);
	}


}

export default AvailableList;