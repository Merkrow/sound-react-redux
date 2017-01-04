import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SongItems from '../components/SongItems';
import * as songActions from '../actions/SongActions';
import * as playerActions from '../actions/playerActions';
import { songs } from '../reducers/songs';
import { player } from '../reducers/player';

const mapStateToProps = ({ songs, player }) => ({
	player,
	songs
})

const actions = Object.assign({}, songActions, playerActions);

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

class Songs extends Component {
	render() {
		return (
			<SongItems {...this.props} />
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs);