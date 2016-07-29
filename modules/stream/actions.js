import * as types from './actionTypes';

//SYNC
export function addStream(stream) {
  return {
    type: types.ADD_STREAM,
    stream
  }
}

//ASYNC
export function getNextStream(isrc) {
  return (dispatch, getState) => {
    const token = getState().auth.access_token;
    const api = `https://apiv2.vevo.com/video/${isrc}/streams/mp4`
    //TODO: add check for no token
    return fetch(api, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${token}`
      }
      .then(response => response.json())
      .then(json => dispatch(addStream(json)))
    })
  }
}

