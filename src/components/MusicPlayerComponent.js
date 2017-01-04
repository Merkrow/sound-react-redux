import React from 'react';
import ReactDOM from 'react-dom';

const Player = React.createClass({
	handlePause() {
		ReactDOM.findDOMNode(this.refs.audio).pause();
	},
	render() {
		return (
		<div className='player'>
			<audio ref='audio' autoPlay={true} src={this.props.stream}/>
			<button onClick={() => this.handlePause()}>Pause</button>
		</div>
		)
	}
})

export default Player;