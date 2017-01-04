import React from 'react';
import Nav from '../components/Nav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigation } from '../reducers/navigation';
import * as navActions from '../actions/NavActions'
import * as songActions from '../actions/songActions';
import { GENRES } from '../util/constants';

const mapStateToProps = ({ navigation }) => ({
	navigation
})

const actions = Object.assign({}, navActions, songActions);

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

const Navigation = React.createClass({
	render() {
		return (
			<Nav GENRES={GENRES} {...this.props} />
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);