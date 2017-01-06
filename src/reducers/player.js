const initialState = {
	trackId: null,
	playing: false
}

export const currentTrack = ( state = initialState, action) => {
	switch (action.type) {
		case 'SET_TRACK':
			return {
				trackId: action.id,
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
				trackId: null,
				playing: false
			};
		default:
			return state;
	}
}