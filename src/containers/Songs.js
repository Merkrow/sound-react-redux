import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SongItems from '../components/SongItems';
import * as songActions from '../actions/SongActions';
import * as playerActions from '../actions/playerActions';
import * as trackListActions from '../actions/trackList';
import { songs } from '../reducers/songs';
import { fetchParams } from '../reducers/fetchParams';
import { currentTrack } from '../reducers/player';
import { loader } from '../reducers/loader';
import InfiniteScroll from '../components/InfinityScroll';
import MusicPlayer from '../containers/MusicPlayer';
import { getStreamUrl } from '../util/util';
import TrackListContainer from './TrackListContainer';
import Loader from './LoaderContainer';


const mapStateToProps = ({ songs, currentTrack, fetchParams, loader }) => ({
	loader,
	currentTrack,
	songs,
	fetchParams
})

const actions = Object.assign({}, songActions, playerActions, trackListActions);

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

class Songs extends Component {
	render() {
		return (<div>
			<SongItems trackId={this.props.currentTrack.track.id} {...this.props} />
			<InfiniteScroll />
			{!!this.props.currentTrack.track.id ? <MusicPlayer stream={getStreamUrl(this.props.currentTrack.track.id)} /> : "" }
			<TrackListContainer />
			{ this.props.songs.collection.length === 0 || this.props.loader ? <Loader /> : '' }
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs);