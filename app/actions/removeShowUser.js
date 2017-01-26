import * as types from '../constants/ActionTypes';
import request from 'ajax-request';

export function removeShowUser(show) {
  return dispatch => {
    dispatch(removeShowUserRequestedAction());
    request({
      url: '/api/XXX',
      method: 'POST',
      data: show
    },
    (err, res) => {
      if (err) {
        console.log(err)
        dispatch(removeShowUserRejectedAction());
      } else {
        dispatch(removeShowUserFulfilledAction(show));
      }
    });
  }
}

function removeShowUserRequestedAction() {
  return {
    type: types.REMOVE_SHOW_USER_REQUESTED
  };
}

function removeShowUserRejectedAction() {
  return {
    type: types.REMOVE_SHOW_USER_REJECTED
  }
}

function removeShowUserFulfilledAction(show) {
  return {
    type: types.REMOVE_SHOW_USER_FULFILLED,
    show
  };
}
