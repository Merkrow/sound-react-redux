import React from 'react';
import Nav from '../components/Nav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigation } from '../reducers/navigation';
import { fetchParams } from '../reducers/fetchParams';
import * as navActions from '../actions/NavActions'
import * as songActions from '../actions/songActions';
import * as fetchActions from '../actions/fetchParamsActions';
import { GENRES } from '../util/constants';

const mapStateToProps = ({ navigation, fetchParams }) => ({
	navigation,
	fetchParams
})

const actions = Object.assign({}, navActions, songActions, fetchActions);

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

const Navigation = React.createClass({
	render() {
		console.log(this.props.route);
		return (<div>
				<Nav GENRES={GENRES} {...this.props} />
				<button>USER LOGIN</button>
			</div>
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);