import * as types from '../constants/ActionTypes';
import request from 'ajax-request';

export function addShowUser(show) {
  return dispatch => {
    dispatch(addShowUserRequestedAction());
    request({
      url: '/api/XXX',
      method: 'POST',
      data: show
    },
    (err, res) => {
      if (err) {
        console.log(err)
        dispatch(addShowUserRejectedAction());
      } else {
        dispatch(addShowUserFulfilledAction(show));
      }
    });
  }
}

function addShowUserRequestedAction() {
  return {
    type: types.ADD_SHOW_USER_REQUESTED
  };
}

function addShowUserRejectedAction() {
  return {
    type: types.ADD_SHOW_USER_REJECTED
  }
}

function addShowUserFulfilledAction(show) {
  return {
    type: types.ADD_SHOW_USER_FULFILLED,
    show
  };
}
