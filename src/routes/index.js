/**
 * @date:2019-03-01$ 15:20$
 * @author:ljl$
 */
import React from 'react'
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import baseStyle from '../css/base.scss'
import NavBar from "../Components/NavBar";
import {view as home} from '../pages/HomePage'
import {NotFoundRoute} from './thunkRoutes'

const host = ''
const Routes = () => (
	<Router>
		<React.Fragment>
			<NavBar/>
			<main className={baseStyle.main}>
				<Switch>
					<Route path={`/${host}`} exact component={home} />
					<Route path={`/*`} component={NotFoundRoute}/>
				</Switch>
			</main>
		</React.Fragment>
	</Router>
)

export default Routes
