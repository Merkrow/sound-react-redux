import React, { Component } from 'react';
import Navigation from './Navigation';
import Songs from './Songs';
import ReactDOM from 'react-dom';
import { navigation } from '../reducers/navigation';
import { connect } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

const mapStateToProps = ({ navigation }) => ({
	navigation
})
const routes = (route) => {
return (
	<div>
	<Route path='/'>
		<IndexRedirect to={route} />
		<Route path=':route' component={() => <div><Navigation /><Songs /></div>}>
		</Route>
	</Route>
	</div>
)
}

class App extends Component {
	render () {
		const { path, params } = this.props.navigation.route;
		const queryArr = Object.keys(params).filter(key => params[key] !== null).map(key => `${key}=${params[key]}`);
		const route = path.join('/').concat(`?${queryArr.join('&')}`);
		return (
				<Router routes={routes(route)} history={browserHistory}>
				</Router>
			
		)
	}
}

export default connect(mapStateToProps)(App);