import React from 'react';
import SongItem from './SongItem';

const SongItems = React.createClass({
	componentWillMount() {
		const fetchParams = {
			...this.props.fetchParams,
			q: 'house'
		}
		this.props.actions.loadSongs(fetchParams);
	},
	render() { 
		return (<div className='song-container'>
				{this.props.songs.collection.map((item, i) => <SongItem key={i} item={item} {...this.props}/>)}
			</div>
		)
	}
})

export default SongItems;