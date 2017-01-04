export const songs = ( state = [], action ) => {
	switch (action.type) {
		case 'SONGS_FETCH':
			return action.payload;
		case 'SONGS_ERROR':
			return state;
		case 'SCROLL_UPLOAD':
			return [...state, action.payload];
		default:
			return state;
	}
}