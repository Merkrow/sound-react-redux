import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { currentTrack } from '../reducers/player';
import { songs } from '../reducers/songs';
import { trackList } from '../reducers/trackList';
import Player from '../components/MusicPlayerComponent';
import * as musicPlayerActions from '../actions/playerActions';
import * as trackListActions from '../actions/trackList';

const mapStateToProps = ({ currentTrack, songs, trackList }) => ({
	songs,
	trackList,
	currentTrack
})

const actions = Object.assign({}, musicPlayerActions, trackListActions)

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(musicPlayerActions, dispatch) });

class MusicPlayer extends Component {
	render() {
		const { trackId } = this.props.currentTrack;
		if(trackId === null) {
			return <div />;
		}
		return <Player {...this.props} />
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);