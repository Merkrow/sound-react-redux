const initialState = {
	collection: [],
	next_href: null
}

export const songs = ( state = initialState, action ) => {
	switch (action.type) {
		case 'SONGS_FETCH':
			return {
				...action.payload,
				collection: action.payload.collection
			}
		case 'SONGS_ERROR':
			return state;
		case 'SCROLL_UPLOAD':
			return {
				next_href: action.payload.next_href,
				collection: [...state.collection, ...action.payload.collection]
			}
		default:
			return state;
	}
}