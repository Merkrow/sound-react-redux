import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/reducers';
import thunkMiddleware from 'redux-thunk';

const initialState = {
	navigation: {
		route: {
			path: ['songs'],
			params: {
				q: 'house'
			}
		}
	},
	songs: {
		collection: [],
		next_href: null
	},
	currentTrack: {
		track: {},
		playing: false
	},
	fetchParams: {
		limit: 20,
		offset: 0,
		linked_partitioning: 1
	},
	trackList: [],

}

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(rootReducer, initialState);

export default store;