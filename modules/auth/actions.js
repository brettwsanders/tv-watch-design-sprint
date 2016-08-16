import * as types from './actionTypes';
const api = 'https://apiv2.vevo.com/oauth/token'
const client_id = '67d63a8b4a90400d813969904d694272'
const client_secret = 'd82ad59122244d3396c738e163d07be1'

//SYNC
export function addToken(token) {
  return {
    type: types.ADD_TOKEN,
    token
  };
};

//ASYNC
export function getToken() {
  return dispatch => {
    const getTokenApi = `${api}?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`;
    return fetch(getTokenApi, {
      method: 'post',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(addToken(json)));
  }
}

export function refreshToken() {
  return (dispatch, getState) => {
    const refresh_token = getState().auth.refresh_token;
    const refreshTokenApi = `${api}?client_id=${client_id}&client_secret=${client_secret}&refresh_token=${refresh_token}&grant_type=refresh_token`;
    return fetch(refreshTokenApi, {
      method: 'post',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(addToken(json)));
  }
}
