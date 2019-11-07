import { RECEIVE_ALL_MEMORIALS } from '../actions/memorial_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_MEMORIALS:
      return merge({}, state, {memorials: action.memorials.data.data})
    default:
      return state;
  }
}