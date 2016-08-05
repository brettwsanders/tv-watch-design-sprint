import * as types from './actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case types.ADD_VIDEO:
      return action.video;

    default:
      return state;
  }
}
