const initialState = [];

export const trackList = ( state = initialState, action ) => {
	switch (action.type) {
		case 'ADD_TRACK_TO_LIST':
		let set = new Set(state);
			set.add(action.id);
			return [...set];
		default:
			return state;
	}
}