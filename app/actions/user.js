import * as types from '../constants/ActionTypes';

export function addNewUser(userInfo) {
  return { type: types.ADD_SHOW_DATABASE, userInfo };
}

export function addShowUser(show) {
  return { type: types.ADD_SHOW_USER, show };
}

export function removeShowUser(show) {
  return { type: types.REMOVE_SHOW_USER, show };
}
