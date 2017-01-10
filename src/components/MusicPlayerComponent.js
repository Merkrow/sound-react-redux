import React from 'react';
import ReactDOM from 'react-dom';
import { getNextSong, getPrevSong, offsetLeft } from '../util/util';

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
		const audioElement = ReactDOM.findDOMNode(this.refs.audio);
		audioElement.addEventListener('loadedmetadata', this.handleLoadedMetadata, false);
		audioElement.addEventListener('loadstart', this.handleLoadStart, false);
		audioElement.addEventListener('timeupdate', this.handleTimeUpdate, false);
	},
	componentWillUnmount() {
		const audioElement = ReactDOM.findDOMNode(this.refs.audio);
		audioElement.removeEventListener('loadedmetadata', this.handleLoadedMetadata, false);
		audioElement.removeEventListener('timeupdate', this.handleTimeUpdate, false);
		audioElement.removeEventListener('loadstart', this.handleLoadStart, false);
	},
	bindSeekMouseEvents() {
		document.addEventListener('mousemove', this.handleSeekMouseMove);
		document.addEventListener('mouseup', this.handleSeekMouseUp);
	},
	handleSeekMouseDown() {
		this.bindSeekMouseEvents();
		this.setState({
			isSeeking: true,
		})
	},
	handleSeekMouseUp() {
		if(!this.state.isSeeking) {
			return ;
		}
		document.removeEventListener('mousemove', this.handleSeekMouseMove);
   		document.removeEventListener('mouseup', this.handleSeekMouseUp);
   		const { currentTime } = this.state;
   		this.setState({
   			isSeeking: false,
   		}, () => {
   			ReactDOM.findDOMNode(this.refs.audio).currentTime = currentTime;
   		})
	},
	handleSeekMouseMove(e) {
		const seekBar = ReactDOM.findDOMNode(this.refs.seekBar);
		const diff = e.clientX - offsetLeft(seekBar);
		const pos = diff < 0 ? 0 : diff;
		let percent = pos / seekBar.offsetWidth;
		percent = percent > 1 ? 1 : percent;
		this.setState({
			currentTime: Math.floor(percent * this.state.duration)
		})
	},
	handleMouseClick(e) {
		e.preventDefault();
		e.stopPropagation();
	},
	handleTimeUpdate(e) {
		if(this.state.isSeeking) {
			return;
		}
		const audioElement = e.currentTarget;
		const currentTime = Math.floor(audioElement.currentTime);

		if(currentTime === this.state.currentTime) {
			return ;
		}
		if(currentTime === this.state.duration) {
			this.nextTrack();
		}

		this.setState({
			currentTime
		})
	},
 	handlePause() {
		ReactDOM.findDOMNode(this.refs.audio).pause();
		this.props.actions.pauseTrack();
	},
	handleLoadedMetadata() {
    	const audioElement = ReactDOM.findDOMNode(this.refs.audio);
    	this.setState({
    		duration: Math.floor(audioElement.duration),
    	});
	},
	handlePlay() {
		let audio = ReactDOM.findDOMNode(this.refs.audio);
		audio.play();
		this.props.actions.playTrack();
	},
	handleLoadStart() {
		this.setState({
    	duration: 0,
    	currentTime: 0
    });
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
	renderDurationBar() {
		const { currentTime, duration } = this.state;
		if(duration !== 0) {
			const width = currentTime / duration * 100;
			return (
				<div ref='seekBar' onClick={this.handleMouseClick} onMouseDown={this.handleSeekMouseDown} className="progressBar"><span style={{ width: `${width}%`}} ref='statusBar' className="progress"></span></div>
			)
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
			<div className='player-seek-bar'>
				{ this.renderDurationBar() }
			</div>
		</div>
		)
	}
})

export default Player;