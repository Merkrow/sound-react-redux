import React from 'react';
import { getStreamUrl } from '../util/util';
import MusicPlayer from '../containers/MusicPlayer';

const SongItem = React.createClass({
	
	handleOnClick(id) {
		if(this.props.currentTrack.trackId === id) {
			return this.props.actions.setInactive();
		}
		return this.props.actions.setTrack(id);
	},
	addTrackToList(id) {
		this.props.actions.addTrackToList(id);
	},
	render() {
		const { item } = this.props;
		return (
			<div className={`song-item ${this.props.currentTrack.trackId === item.id ? 'active' : ''}`}>
				{this.props.currentTrack.trackId === item.id ? <MusicPlayer stream={getStreamUrl(item.id)} /> : "" }
				<span className='song-item-title'>{item.title}</span>
				<img className='item-image' src={item.artwork_url} onClick={() => this.handleOnClick(item.id)} />
				<button onClick={() => this.addTrackToList(item.id)}>Add track to list</button>
			</div>
		)
	}
})

export default SongItem;