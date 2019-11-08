import * as APIendPoint from "../util/memorials_api_util";

export const RECEIVE_ALL_MEMORIALS = "RECEIVE_ALL_MEMORIALS";
export const RECEIVE_MEMORIAL_ERRORS = "RECEIVE_MEMORIAL_ERRORS";
export const RECEIVE_RESET_ERRORS = "RECEIVE_RESET_ERRORS";

export const fetchMemorials = () => dispatch =>
  APIendPoint.fetchMemorials()
    .then(memorials => dispatch({ type: RECEIVE_ALL_MEMORIALS, memorials }))
    .catch(err => dispatch({ type: RECEIVE_MEMORIAL_ERRORS, err }));

export const resetErrors = () => ({ type: RECEIVE_RESET_ERRORS });
