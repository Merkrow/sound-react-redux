import React from 'react';
import ReactDOM from 'react-dom';
import { getNextSong, getPrevSong } from '../util/util';

const Player = React.createClass({
	getInitialState() {
		return {
			currentTime: 0,
			duration: 0,
			isSeeking: false,
			muted: false,
	    	repeat: false,
	    	volume: 1
    	}
	},
	componentDidMount() {

	},
 	handlePause() {
		ReactDOM.findDOMNode(this.refs.audio).pause();
		this.props.actions.pauseTrack();
	},
	handlePlay() {
		let audio = ReactDOM.findDOMNode(this.refs.audio);
		audio.play();
		this.props.actions.playTrack();
	},
	nextTrack(){
		const { collection } = this.props.songs;
		const { id } = this.props.currentTrack.track;
		const { trackList } = this.props;
		let next;
		if(!trackList.some(item => item.id === id)) {
			next = getNextSong(collection, id);
			this.props.actions.setTrack(next);
		} else {
			next = getNextSong(trackList, id);
			this.props.actions.setTrack(next);
		}
	},
	prevTrack() {
		const { collection } = this.props.songs;
		const { id } = this.props.currentTrack.track;
		const { trackList } = this.props;
		let prev;
		if(!trackList.some(item => item.id === id)) {
			prev = getPrevSong(collection, id);
			this.props.actions.setTrack(prev);
		} else {
			prev = getPrevSong(trackList, id);
			this.props.actions.setTrack(prev);
		}
	},
	render() {
		const { playing, trackId } = this.props.currentTrack;
		return (
		<div className='player'>
			<audio ref='audio' autoPlay={true} src={this.props.stream}/>
			<button className="player-nav" onClick={() => this.prevTrack()}>&lt;</button>
			{ playing ? <button className='player-isplaying player-pause' onClick={() => this.handlePause()}></button> : <button className='player-isplaying player-play' onClick={() => this.handlePlay()}></button> }
			<button className="player-nav" onClick={() => this.nextTrack()}>&gt;</button>
			<div id="progressBar"><span ref='statusBar' id="progress"></span></div>
		</div>
		)
	}
})

export default Player;