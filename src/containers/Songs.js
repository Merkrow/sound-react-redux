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
import InfiniteScroll from '../components/InfinityScroll';


const mapStateToProps = ({ songs, currentTrack, fetchParams }) => ({
	currentTrack,
	songs,
	fetchParams
})

const actions = Object.assign({}, songActions, playerActions, trackListActions);

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

class Songs extends Component {
	render() {
		return (<div>
			<SongItems {...this.props} />
			<InfiniteScroll />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs);