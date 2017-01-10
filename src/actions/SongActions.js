import { getSongUrl } from '../util/util';

export const loadSongs = (params) => async (dispatch) => {
	try {
		let response = await fetch(getSongUrl(params));
		let payload = await response.json();
		dispatch({ type: 'SONGS_FETCH', payload })
	} catch(error) {
		dispatch({ type: 'SONGS_ERROR', error })
	}
}

export const addSongs = url => async (dispatch) => {
	try {
		dispatch({ type: 'SHOW_LOADER '})
		let response = await fetch(url);
		let payload = await response.json();
		dispatch({ type: 'SCROLL_UPLOAD', payload })
		dispatch({ type: 'HIDE_LOADER '})
	} catch(error) {
		dispatch({ type: 'SONGS_ERROR', error })
	}
}
