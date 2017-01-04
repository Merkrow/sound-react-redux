import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { player } from '../reducers/player';
import Player from '../components/MusicPlayerComponent';

const mapStateToProps = ({ player }) => ({
	player
})

class MusicPlayer extends Component {
	render() {
		const { player } = this.props;
		if(player === null) {
			return <div />;
		}
		return <Player {...this.props} />
	}
}

export default connect(mapStateToProps)(MusicPlayer);