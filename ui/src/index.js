import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter,Route} from 'react-router-dom';

import TeamList from './components/teamlist'
import ProspectList from './components/prospectlist'
import Draft from './components/draft'


import JSON from './teams.json'
import Prospects from './prospects.json'
import AvailableProspects from './prospects.json'



class App extends React.Component {

	state={
		data:JSON,
		prospects:Prospects,
		available:AvailableProspects
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
				<BrowserRouter>
					<Route path="/teams" render={(routeProps) => <TeamList teams={this.state.data} /> } />
					<Route path="/prospects" render={(routeProps) => <ProspectList prospects={this.state.prospects} /> } />
					<Route path="/draft" render={(routeProps) => <Draft availableprospects={this.state.prospects} /> } />
				</BrowserRouter>
			</div>
		)

	}

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



ReactDOM.render(<App/>,document.getElementById('root'))