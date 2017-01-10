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


class App extends Component {
	constructor(props, context) {
		super(props);
		context.router;
	}
	render () {
		const { path, params } = this.props.navigation.route;
		const queryArr = Object.keys(params).filter(key => params[key] !== null).map(key => `${key}=${params[key]}`);
		const route = path.join('/').concat(`?${queryArr.join('&')}`);
		return (
			<div>
				<Navigation {...this.props} query={this.context.router.location.query.q} />
				{this.props.children}
			</div>
		)
	}
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};


export default connect(mapStateToProps)(App);