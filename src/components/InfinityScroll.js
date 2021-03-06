import React from 'react';
import * as songActions from '../actions/songActions';
import { debounce } from '../util/util';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchParams } from '../reducers/fetchParams';
import { songs } from '../reducers/songs';
import * as loaderActions from '../actions/loader'

const actions = Object.assign({}, songActions, loaderActions);

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

const mapStateToProps = ({ songs }) => ({
	songs
});

const InfiniteScroll = React.createClass({

	componentDidMount() {
		let load = debounce(this.handleScroll, 3000);
		let loader = debounce(this.loaderScroll, 0, true);
		window.addEventListener('scroll', () => {
			loader();
			load();
		});
	},
	componentWillUnmount() {
   		window.removeEventListener('scroll', load);
 	},
 	loaderScroll() {
 		if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight + 10)) {
        	this.props.actions.showLoader();
    	}
 	},
 	handleScroll() {
 		if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100)) {
        	this.props.actions.addSongs(this.props.songs.next_href);
    	}
    	this.props.actions.hideLoader();
 	},
	render() {
		return <div />;
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteScroll);