import React from 'react'

import PickItem from './pickItem'





class Picks extends React.Component {
	

	render(){
		console.log(this.props)
		return (
			<div>
				
			picks
			<div className="Picks">
				{this.props.picks.map((thePick)=>(
					<PickItem key={thePick.pickId} pick={thePick} />
				))}
			</div>


			</div>
		);
	}


}

export default Picks;