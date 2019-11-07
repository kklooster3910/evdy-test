import { RECEIVE_MEMORIAL_ERRORS } from '../actions/memorial_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MEMORIAL_ERRORS:
      return merge({}, state, {errors: action.err});
    default:
      return state;
  }
}