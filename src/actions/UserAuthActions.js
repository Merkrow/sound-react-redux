export function loginUser(shouldShowStream = true) {
  return dispatch => {
    SC.initialize({
      client_id: CLIENT_ID,
      redirect_uri: `${window.location.protocol}//${window.location.host}/api/callback`,
    });

    SC.connect().then(authObj => {
      Cookies.set(COOKIE_PATH, authObj.oauth_token);
      dispatch(authUser(authObj.oauth_token, shouldShowStream));
    })
    .catch(err => { throw err; });
  };
}