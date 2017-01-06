import React from 'react';
import { Link } from 'react-router';
import { debounce } from '../util/util';

let limit = 20;

const Nav = React.createClass({
	handleOnClick(e, name) {
		e.preventDefault();
		this.props.actions.changeNav(name);
		this.props.actions.changeFetchParams({ q: name })
		this.props.actions.loadSongs(this.props.fetchParams);
	},
	render() {
		let i = 0;
		const { q } = this.props.fetchParams;
		return (
			<ul className='navigation'>
				{this.props.GENRES.map(name => 
					<li className={`navElement ${(name === q ? 'active' : '')}`} key={++i} onClick={(e) => this.handleOnClick(e, name)}><Link to={`/songs?q=${name}`}>{name}</Link></li>)}
			</ul>
		)
	}
})

export default Nav;