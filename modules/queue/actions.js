import * as types from './actionTypes';
import { getNextStream } from 'modules/stream/actions'

//SYNC
export function addQueue(queue = []) {
  return {
    type: types.ADD_QUEUE,
    queue
  };
};

//ASYNC
export function getQueue() {
  return dispatch => {
    //TODO: add actual url
    const api = 'someapi.com'
    return fetch(api, {
      method: 'get'
    })
    .then(response => response.json())
    .then(json => {
      const queue = [...json]
      const nextIsrc = queue.shift()
      dispatch(addQueue(queue))
      dispatch(getNextStream(nextIsrc))
    })
  }
}

export function videoEnded() {
  return dispatch => {
    //TODO: add actual url
    const api = 'someapi.com'
    return fetch(api, {
      method: 'delete'
    })
    .then(response => dispatch(getQueue()))
  }
}
