const initialState = {
	track: {},
	playing: false
}

export const currentTrack = ( state = initialState, action) => {
	switch (action.type) {
		case 'SET_TRACK':
			return {
				track: action.item,
				playing: true,
			}
		case 'PAUSE_TRACK':
			return {
				...state,
				playing: false
			}
		case 'PLAY_TRACK':
			return {
				...state,
				playing: true
			}
		case 'SET_INACTIVE':
			return {
				track: {},
				playing: false
			};
		default:
			return state;
	}
}