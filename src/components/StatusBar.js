import React from 'react';
import ReactDOM from 'react-dom';

const StatusBar = React.createClass({
	render() {
		return(
			<div id="progressBar"><span ref='statusBar' id="progress"></span></div>
		)
	}
})

export default StatusBar;