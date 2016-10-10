import React from 'react'
import {Route, Redirect, IndexRoute} from 'react-router'

import Layout from './pages/layout/Layout.jsx'

import Home from './pages/home/Home.jsx'
import ShiShen from './pages/shiShen/ShiShen.jsx'
import MoNi from './pages/moNi/MoNi.jsx'
import YuHun from './pages/yuHun/YuHun.jsx'
import Other from './pages/other/Other.jsx'

const Routes = (
	<Route>
		<Route path="/" component={Layout}>
			<Redirect from="/" to="/home"/>
			<IndexRoute component={Home}/>
			<Route path="home" component={Home}/>
			<Route path="shiShen" component={ShiShen}/>
			<Route path="moNi" component={MoNi}/>
			<Route path="yuHun" component={YuHun}/>
			<Route path="other" component={Other}/>
		</Route>
	</Route>
);

export default Routes
