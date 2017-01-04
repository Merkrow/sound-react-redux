import React from 'react';
import SongItem from './SongItem';

const SongItems = React.createClass({
	render() {
		return (<div>
				{this.props.songs.map(item => <SongItem key={item.id} item={item} {...this.props}/>)}
			</div>
		)
	}
})

export default SongItems;