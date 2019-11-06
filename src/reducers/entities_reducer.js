import { combineReducers } from 'redux';
import memorials from './memorial_reducer';

const entitiesReducer = combineReducers({
  memorials,
});

export default entitiesReducer;