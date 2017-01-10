import React from 'react';
import SongItem from './SongItem';

const SongItems = React.createClass({
	componentDidMount() {
		const fetchParams = {
			...this.props.fetchParams,
			q: this.props.query
		}
		this.props.actions.loadSongs(fetchParams);
	},
	componentWillReceiveProps() {
		const fetchParams = {
			...this.props.fetchParams,
			q: this.props.query
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