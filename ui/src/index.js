import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter,Route, withRouter} from 'react-router-dom';
import {Router, browserHistory} from 'react-router';


//OUR COMPONENTS
import TeamList from './components/teamlist'
import ProspectList from './components/prospectlist'
import Draft from './components/draft'
import Picks from './components/picks'


//DATA LINKS
import Teams from './teams.json'
import Prospects from './prospects.json'
import AvailableProspects from './prospects.json'
import thePicks from './picks.json'
import TeamNeeds from './needs.json'



class App extends React.Component {

	
	 	

	state={
		data:Teams,
		picks:thePicks,
		prospects:Prospects,
		available:AvailableProspects,
		teamNeeds:TeamNeeds
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
					<Route path="/picks" render={(routeProps) => <Picks picks={this.state.picks} /> } />
					<Route path="/teams" render={(routeProps) => <TeamList teams={this.state.data} /> } />
					<Route path="/prospects" render={(routeProps) => <ProspectList prospects={this.state.prospects} /> } />
					<Route path="/draft" render={(routeProps) => <Draft picks={this.state.picks} availableprospects={this.state.prospects} teamNeeds={this.state.teamNeeds} /> } />
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