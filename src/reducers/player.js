export const player = ( state = null, action) => {
	switch (action.type) {
		case 'SET_ACTIVE':
			return action.id;
		case 'SET_INACTIVE':
			return null;
		default:
			return state;
	}
}