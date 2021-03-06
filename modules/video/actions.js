import * as types from './actionTypes';
import { getNextStream } from 'modules/stream/actions';
import { refreshToken } from 'modules/auth/actions';
import * as helpers from './helpers';

const api = 'https://vevo-tv-party.herokuapp.com'; //production

//SYNC
export function addVideo(video = {}) {
  video.artist = helpers.buildArtistString(video.artists);
  return {
    type: types.ADD_VIDEO,
    video
  };
};

//ASYNC
export function getVideo() {
  return (dispatch, getState) => {
    return fetch(`${api}/api/queue/pop`, {
      method: 'post'
    })
    .then(response => response.json())
    .then(video => {
      if (video.length === 0) {
        const prevIsrc = getState().video.isrc || 'GB1101501456'; //hard-code fallback video if all else fails
        dispatch(getRelatedVideo(prevIsrc));
      } else {
        dispatch(addVideo(video));
        dispatch(getNextStream(video.isrc));
      }
    })
    .catch(error => console.log('[getVideo]', error))
  }
}

export function getRelatedVideo(isrc) {
  return (dispatch, getState) => {
    const auth = getState().auth;
    // refresh token if expiring within next 4 hours
    if ((auth.expires - Date.now()) <= 14400) refreshToken();
    const api = `https://apiv2.vevo.com/video/${isrc}/related?isExplicit=false`;
    return fetch(api, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${auth.access_token}`
      }
    })
    .then(response => response.json())
    .then(videos => {
      const nextVid = helpers.getRandom(videos);
      dispatch(addVideo(nextVid));
      dispatch(getNextStream(nextVid.isrc));
    })
    .catch(error => console.log('[getRelatedVideo]', error))
  }
}
