import React from 'react'

import NeedItem from './NeedItem'


class TeamNeedsList extends React.Component {

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
			<div className="teamNeedsList">
				{this.props.needs.map((aNeed)=>(
					<NeedItem key={aNeed.Id} need={aNeed} />
				))}
			</div>

			
		);
	}


}

export default TeamNeedsList;