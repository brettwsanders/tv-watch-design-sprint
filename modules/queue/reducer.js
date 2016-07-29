import * as types from './actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case types.ADD_QUEUE:
      return action.queue;

    default:
      return state;
  }
}
