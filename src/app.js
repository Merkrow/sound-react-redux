import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';	
import store from './store/store';
import Navigation from './containers/Navigation';
import Songs from './containers/Songs';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

function run() {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={browserHistory}>
			<Route path='/' component={App} >
				<IndexRedirect to='/songs?q=house' />
				<Route path='/:genre' component={() => <div><Songs /></div>} />
  			</Route>
 			</Router>
		</Provider>,
		document.getElementById('root')
	)
}

run();
