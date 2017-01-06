import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as trackListActions from '../actions/trackList';
import { trackList } from '../reducers/trackList';
import { currentTrack } from '../reducers/player';
import * as playerActions from '../actions/playerActions';
import TrackListComponent from '../components/TrackListComponent';

const mapStateToProps = ({ trackList, currentTrack }) => ({
	currentTrack,
	trackList
})

const actions = Object.assign({}, trackListActions, playerActions);

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

class TrackListContainer extends Component {
	render() {
		return (
			<div>
				{this.props.trackList.length > 0 ? <TrackListComponent {...this.props} /> : '' }
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackListContainer)