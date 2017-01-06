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
		console.log(ReactDOM.findDOMNode(this.refs.audio).currentTime);
	},
	handlePlay() {
		let audio = ReactDOM.findDOMNode(this.refs.audio);
		audio.play();
		this.props.actions.playTrack();
	},
	nextTrack(){
		const { collection } = this.props.songs;
		const { trackId } = this.props.currentTrack;
		const { trackList } = this.props;
		let next;
		if(trackList.indexOf(trackId) < 0) {
			next = getNextSong(collection, trackId);
			this.props.actions.setTrack(next.id);
		} else {
			next = getNextSong(trackList, trackId);
			this.props.actions.setTrack(next);
		}
	},
	prevTrack() {
		const { collection } = this.props.songs;
		const { trackId } = this.props.currentTrack;
		const { trackList } = this.props;
		let prev;
		if(trackList.indexOf(trackId) < 0) {
			prev = getPrevSong(collection, trackId);
			this.props.actions.setTrack(prev.id);
		} else {
			prev = getPrevSong(trackList, trackId);
			this.props.actions.setTrack(prev);
		}
	},
	render() {
		const { playing, trackId } = this.props.currentTrack;
		return (
		<div className='player'>
			<audio ref='audio' autoPlay={true} src={this.props.stream}/>
			<button onClick={() => this.prevTrack()}>Previous Track</button>
			{ playing ? <button onClick={() => this.handlePause()}>Pause</button> : <button onClick={() => this.handlePlay()}>Play</button> }
			<button onClick={() => this.nextTrack()}>Next Track</button>
			<div id="progressBar"><span ref='statusBar' id="progress"></span></div>
		</div>
		)
	}
})

export default Player;