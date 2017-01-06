import React from 'react';


const TrackListItem = React.createClass({
	removeTrack(id) {
		this.props.actions.removeTrackFromList(id);
				if(this.props.currentTrack.track.id === id) {
			this.props.actions.setInactive();
		}
	},
	startPlay(item) {
		this.props.actions.setTrack(item);
	},
	render() {
		const { item } = this.props;
		const { id } = this.props.currentTrack.track;
		const pic = item.artwork_url ? item.artwork_url : 'https://i1.sndcdn.com/artworks-000105419248-gqvhw0-large.jpg';
		return (
			<div className={`track-list-item ${item.id === id ? 'active' : ''}`} onClick={() => this.startPlay(item)}>
				<span>{item.title}</span>
				<img className='track-list-image' src={pic} />
				<button className='track-item-remove' onClick={() => this.removeTrack(item.id)}>-</button>
			</div>
		)
	}
})

export default TrackListItem;