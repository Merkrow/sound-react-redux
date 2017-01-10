const initialState = {
	limit: 20,
	linked_partioning: 1,
	offset: 0
}

export const fetchParams = ( state = initialState, action ) => {
	switch (action.type) {
		case 'CHANGE_FETCH_PARAMS':
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
}