import * as types from './actionTypes';

export function updateQueue(queue = []) {
  return {
    type: types.UPDATE_QUEUE,
    queue
  };
};

export function popOffQueue() {
  return {
    type: types.POP_OFF_QUEUE,
  };
};
