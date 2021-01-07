import React from 'react'

import ProspectItem from './prospect'




class ProspectList extends React.Component {
	

	render(){
		
		return (
			<div className="prospectList">
				{this.props.prospects.map((theProspect)=>(
						<ProspectItem key={theProspect.fname + theProspect.lname + theProspect.school}
						prospect={theProspect} />
				))}
			</div>
		);
	}


}

export default ProspectList;