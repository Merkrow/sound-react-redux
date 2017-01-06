import React from 'react';
import TrackListItem from './TrackListItem';


const TrackListComponent = React.createClass({
	render() {
		return (
			<div className='track-list-container'>
				{this.props.trackList.map((item, i) => <TrackListItem key={-1-i} item={item} {...this.props} />)}
			</div>
		)
	}
})

export default TrackListComponent;