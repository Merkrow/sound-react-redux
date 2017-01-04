import React from 'react';
import { getStreamUrl } from '../util/util';
import MusicPlayer from '../containers/MusicPlayer';

const SongItem = React.createClass({
	
	handleOnClick(id) {
		if(this.props.player === id) {
			return this.props.actions.setInactive();
		}
		return this.props.actions.setActive(id);
	},
	render() {
		const { item } = this.props;
		return (
			<div className={`song-item ${this.props.player === item.id ? 'active' : ''}`}>
				{this.props.player === item.id ? <MusicPlayer stream={getStreamUrl(item.id)} /> : "" }
				<span className='song-item-title'>{item.title}</span>
				<img className='item-image' src={item.artwork_url} onClick={() => this.handleOnClick(item.id)} />
			</div>
		)
	}
})

export default SongItem;