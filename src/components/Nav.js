import React from 'react';
import { Link } from 'react-router';
import { debounce } from '../util/util';

let limit = 20;

const Nav = React.createClass({
	handleOnClick(e, name) {
		e.preventDefault();
		this.props.actions.changeNav(name);
	},
	componentDidMount() {
		let load = debounce(this.handleScroll, 2000);
		window.addEventListener('scroll', load);
	},
	componentWillUnmount() {
   		window.removeEventListener('scroll', debounce(this.handleScroll, 2000)());
 	},
 	handleScroll() {
 		if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
 			const { q } = this.props.navigation.route.params;
 			
 			const params = {
			q,
			limit: limit + 20
			}

        	this.props.actions.loadSongs(params);
    	}
 	},
	render() {
		let i = 0;
		const { q } = this.props.navigation.route.params;
		const params = {
			q,
			limit: 20
		}
		this.props.actions.loadSongs(params);
		return (
			<ul className='navigation'>
				{this.props.GENRES.map(name => 
					<li className={`navElement ${(name === q ? 'active' : '')}`} key={++i} onClick={(e) => this.handleOnClick(e, name)}><Link to={`/songs?q=${name}`}>{name}</Link></li>)}
			</ul>
		)
	}
})

export default Nav;