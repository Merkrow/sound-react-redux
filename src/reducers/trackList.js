const initialState = [];

export const trackList = ( state = initialState, action ) => {
	switch (action.type) {
		case 'ADD_TRACK_TO_LIST':
			let set = new Set(state);
			set.add(action.item);
			return [...set];
		case 'REMOVE_TRACK_FROM_LIST':
			const newState = state.filter(item => item.id !== action.id);
			return [...newState];
		default:
			return state;
	}
}