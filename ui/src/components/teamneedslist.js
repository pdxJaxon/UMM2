import React from 'react'




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
					JSON.stringify(aNeed)
				))}
			</div>
			
		);
	}


}

export default TeamNeedsList;