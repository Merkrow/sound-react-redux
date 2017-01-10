import SC from 'soundcloud';

export function loginUser(shouldShowStream = true) {
  return dispatch => {
    SC.initialize({
      client_id: 'f4323c6f7c0cd73d2d786a2b1cdae80c',
      redirect_uri: `${window.location.protocol}//${window.location.host}/api/callback`,
    });

    SC.connect().then(authObj => {
      Cookies.set(COOKIE_PATH, authObj.oauth_token);
      dispatch({ type: 'RECEIVE_TOKEN', token: authObj.oauth_token });
    })
    .catch(err => { throw err; });
  };
}
