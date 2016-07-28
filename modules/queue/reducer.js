import * as types from './actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_QUEUE:
      return action.queue;

    case types.POP_OFF_QUEUE:
      const newState = [...state]
      const played = newState.pop()
      return newState;

    default:
      return state;
  }
}
