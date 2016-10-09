import React from 'react'
import {Route, Redirect, IndexRoute} from 'react-router'

import Layout from './pages/layout/Layout.jsx'

import Home from './pages/home/Home.jsx'

const Routes = (
	<Route>
		<Route path="/" component={Layout}>
			<Redirect from="/" to="/home"/>
			<IndexRoute component={Home}/>
			<Route path="home" component={Home}/>
		</Route>
	</Route>
);

export default Routes
