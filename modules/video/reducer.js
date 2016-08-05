import * as types from './actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case types.ADD_VIDEO:
      const artist = action.video.artists? action.video.artists[0].name : '';
      return {
        ...action.video,
        artist
      };

    default:
      return state;
  }
}
