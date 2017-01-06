import React from 'react';
import SongItem from './SongItem';

const SongItems = React.createClass({
	componentWillMount() {
		this.props.actions.loadSongs(this.props.fetchParams);
	},
	render() { 
		return (<div>
				{this.props.songs.collection.map((item, i) => <SongItem key={i} item={item} {...this.props}/>)}
			</div>
		)
	}
})

export default SongItems;