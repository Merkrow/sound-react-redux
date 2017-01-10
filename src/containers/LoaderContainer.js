import React, { Component } from 'react';

class Loader extends Component {
	render() {
		return (
			<div className="circ">
				<div className="load">Loading...</div>
				<div className="hands"></div>
 				<div className="body"></div>
 				<div className="head">
  				<div className="eye"></div>
 				</div>
			</div>
		)
	}
}

export default Loader;