import React from 'react';
import Nav from '../components/Nav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigation } from '../reducers/navigation';
import { fetchParams } from '../reducers/fetchParams';
import { authed } from '../reducers/UserAuth';
import * as navActions from '../actions/NavActions'
import * as songActions from '../actions/songActions';
import * as fetchActions from '../actions/fetchParamsActions';
import * as UserActions from '../actions/UserAuthActions';
import { GENRES } from '../util/constants';

const mapStateToProps = ({ fetchParams }) => ({
	fetchParams
})

const actions = Object.assign({}, navActions, songActions, fetchActions, UserActions);

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

const Navigation = React.createClass({
	login(){
		this.props.actions.loginUser();
	},
	render() {
		return (<div>
				<Nav query={this.props.query} GENRES={GENRES} {...this.props} />
				<button onClick={this.login}>USER LOGIN</button>
			</div>
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);