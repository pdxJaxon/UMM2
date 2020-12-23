import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TeamList from './components/teamlist'
import ProspectList from './components/prospectlist'

import JSON from './teams.json'
import Prospects from './prospects.json'



class App extends React.Component {

	state={
		data:JSON,
		prospects:Prospects
	}

	render(){

		return(
			<div>
				<div className="header">You Mock Me</div>
				<div className="topnav">
					<ul>
						<li><a href="http://www.nfl.com">menu 1</a></li>
						<li><a href="http://www.nfl.com">menu 1</a></li>
						<li><a href="http://www.nfl.com">menu 1</a></li>
						<li><a href="http://www.nfl.com">menu 1</a></li>
						<li><a href="http://www.nfl.com">menu 1</a></li>
					</ul>
				</div>
				<h1>Teams</h1>
				<TeamList teams={this.state.data}/>
				<h1>Prospects</h1>
				<ProspectList prospects={this.state.prospects}/>
			</div>
		)

	}

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



ReactDOM.render(<App/>,document.getElementById('root'))