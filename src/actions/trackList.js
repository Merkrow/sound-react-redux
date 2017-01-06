export const addTrackToList = (item) => ({
	type: 'ADD_TRACK_TO_LIST',
	item
})

export const removeTrackFromList = (id) => ({
	type: 'REMOVE_TRACK_FROM_LIST',
	id
})