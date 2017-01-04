const initialState = { route : { path: ['songs'], params: { q: 'house' } } };

export const navigation = ( state = initialState, action ) => {
	switch (action.type) {
		case 'CHANGE_NAV':
			return {
				route: {
					...state.route,
					params: {
						q: action.query
					} 
				}
			};
		default:
			return state;
	}
}