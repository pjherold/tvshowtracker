import * as types from '../constants/ActionTypes';
import request from 'ajax-request';

export function addShowDatabase(show) {
  return dispatch => {
    dispatch(addShowDatabaseRequestedAction());
    request({
      url: '/api/shows',
      method: 'POST',
      data: show
    },
    (err, res) => {
      if (err) {
        console.log(err)
        dispatch(addShowDatabaseRejectedAction());
      } else {
        dispatch(addShowDatabaseFulfilledAction(show));
      }
    });
  }
}

function addShowDatabaseRequestedAction() {
  return {
    type: types.ADD_SHOW_DATABASE_REQUESTED
  };
}

function addShowDatabaseRejectedAction() {
  return {
    type: types.ADD_SHOW_DATABASE_REJECTED
  }
}

function addShowDatabaseFulfilledAction(show) {
  return {
    type: types.ADD_SHOW_DATABASE_FULFILLED,
    show
  };
}
