import { combineReducers } from 'redux';
import { navigation } from './navigation';
import { songs } from './songs';
import { player } from './player';

export const rootReducer = combineReducers({
	navigation,
	songs,
	player
})