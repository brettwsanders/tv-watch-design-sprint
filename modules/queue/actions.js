import * as types from './actionTypes';
import { getNextStream } from 'modules/stream/actions'

const api = 'http://4f5d8066.ngrok.io'

//SYNC
export function addQueue(queue = []) {
  return {
    type: types.ADD_QUEUE,
    queue
  };
};

//ASYNC
export function getQueue() {
  console.log('in getQueue!')
  return dispatch => {
    return fetch(`${api}/api/queue/pop`, {
      method: 'post'
    })
    .then(response => response.json())
    .then(video => {
      console.log('video is', video)
      // dispatch(addQueue(video))
      dispatch(getNextStream(video.isrc))
    })
    .catch(error => console.log('error', error))
  }
}

export function videoEnded() {
  console.log('in videoEnded')
  return dispatch => {
    return fetch(api, {
      method: 'delete'
    })
    .then(response => dispatch(getQueue()))
  }
}
