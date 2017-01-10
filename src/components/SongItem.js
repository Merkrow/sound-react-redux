import React from 'react';

const SongItem = React.createClass({
	
	handleOnClick(item) {
		if(this.props.trackId && this.props.trackId === item.id) {
			return this.props.actions.setInactive();
		}
		return this.props.actions.setTrack(item);
	},
	addTrackToList(item) {
		this.props.actions.addTrackToList(item);
	},
	render() {
		const { item } = this.props;
		const pic = item.artwork_url ? item.artwork_url : 'https://i1.sndcdn.com/artworks-000105419248-gqvhw0-large.jpg';
		return (
			<div className={`song-item ${this.props.currentTrack.track.id === item.id ? 'active' : ''}`}>
				<span className='song-item-title'>{item.title.split(' ').splice(0, 7).join(' ')}</span>
				<img className='song-item-image' src={pic} onClick={() => this.handleOnClick(item)} />
				<button className='add_to_list' onClick={() => this.addTrackToList(item)}>+</button>
			</div>
		)
	}
})

export default SongItem;