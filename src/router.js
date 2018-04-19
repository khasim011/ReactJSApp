import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Plp from './components/plp/PLP';

const Routes= () => (
	<Router>
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/home" component={Home}/>
			<Route path="/plp" component={Plp}/>
		</div>
	</Router>
);

export default Routes;