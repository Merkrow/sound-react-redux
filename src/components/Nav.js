import React from 'react';
import { Link } from 'react-router';
import { debounce } from '../util/util';

let limit = 20;

const Nav = React.createClass({
	handleOnClick(e, name) {
		e.preventDefault();
		const fetchParams = {
			...this.props.fetchParams,
			q: name
		}
		this.props.actions.loadSongs(fetchParams);
		this.props.actions.changeNav(name);

	},
	render() {
		const { q } = this.props.navigation.route.params;
		return (
			<ul className='navigation'>
				{this.props.GENRES.map((name, i) => 
					<li key={i} className={`navElement ${(name === q ? 'active' : '')}`} onClick={(e) => this.handleOnClick(e, name)}><Link className='route' to={`/songs?q=${name}`}>{name}</Link></li>)}
			</ul>
		)
	}
})

export default Nav;