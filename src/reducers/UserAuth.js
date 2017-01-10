const initialState = {
  accessToken: null,
  user: null,
};

export const authed = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_TOKEN':
      return Object.assign({}, state, {
        accessToken: action.accessToken,
      });

    case 'RECEIVE_USER':
      return Object.assign({}, state, {
        user: action.user,
      });
    default:
    	return state;
}
}
