import React from 'react'




class TeamNeedsList extends React.Component {


	render(){
		

		return (
			<div className="teamNeedsList">
				{this.props.needs.map((aNeed)=>(
					aNeed
				))}
			</div>
			
		);
	}


}

export default TeamNeedsList;