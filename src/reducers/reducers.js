import { combineReducers } from 'redux';
import { navigation } from './navigation';
import { songs } from './songs';
import { currentTrack } from './player';
import { fetchParams } from './fetchParams';
import { trackList } from './trackList';

export const rootReducer = combineReducers({
	navigation,
	songs,
	currentTrack,
	fetchParams,
	trackList,

})