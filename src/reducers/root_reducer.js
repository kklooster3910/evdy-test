import { combineReducers } from "redux";
import memorials from "./memorial_reducer";
import errors from './errors_reducer'

const rootReducer = combineReducers({
  memorials,
  errors
});

export default rootReducer;
