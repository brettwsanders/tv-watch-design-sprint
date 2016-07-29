import * as types from './actionTypes';

export default function(state = '', action) {
  switch (action.type) {
    case types.ADD_STREAM:
      return action.stream;

    default:
      return state;
  }
}
