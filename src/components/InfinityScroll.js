import React from 'react';
import * as songActions from '../actions/songActions';
import { debounce } from '../util/util';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchParams } from '../reducers/fetchParams';
import { songs } from '../reducers/songs';

const actions = Object.assign({}, songActions);

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

const mapStateToProps = ({ songs }) => ({
	songs
});

const InfiniteScroll = React.createClass({

	componentDidMount() {
		let load = debounce(this.handleScroll, 2000);
		window.addEventListener('scroll', load);
	},
	componentWillUnmount() {
   		window.removeEventListener('scroll', debounce(this.handleScroll, 2000)());
 	},
 	handleScroll() {
 		if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
        	this.props.actions.addSongs(this.props.songs.next_href);
    	}
 	},
	render() {
		return <div />;
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteScroll);