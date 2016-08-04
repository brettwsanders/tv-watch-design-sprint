import * as types from './actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case types.ADD_VIDEO:
      return {
        ...action.video,
        artist: action.video.artists[0].name
      };

    default:
      return state;
  }
}
