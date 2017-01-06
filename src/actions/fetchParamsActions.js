export const changeFetchParams = ( payload ) => ({
	type: 'CHANGE_FETCH_PARAMS',
	payload: {
		...payload
	}
})