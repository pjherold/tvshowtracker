import { combineReducers } from 'redux';
import * as ActionTypes from '../constants/ActionTypes';



const ShowDatabaseReducer = (state={}, action) => {
  switch(action.type) {
    case ActionTypes.ADD_SHOW_DATABASE_FULFILLED:
      if (state.showIDs.includes(action.show.id)){
        return state;
      }
      let updatedShows = [...state.shows, action.show];
      let updatedShowIDs = [...state.showIDs, action.show.id]
      return Object.assign(
        state,
        {shows: updatedShows},
        {showIDs: updatedShowIDs});

    default:
      return state;
  }
}

const ShowUserReducer = (state={}, action) => {
  switch(action.type) {
    case ActionTypes.ADD_SHOW_USER_FULFILLED:
      if (state.showIDs.includes(action.show.id)){
        return state;
      }
      let updatedShows = [...state.shows, action.show];
      let updatedShowIDs = [...state.showIDs, action.show.id]
      return Object.assign(
        state,
        {shows: updatedShows},
        {showIDs: updatedShowIDs});

    case ActionTypes.REMOVE_SHOW_USER_FULFILLED:
      if (!state.showIDs.includes(action.show.id)){
        return state;
      }
      updatedShowIDs = [];
      updatedShowIDs.slice(updatedShowIDs.indexOf(action.show.id), 1);

      updatedShows = [];
      for (let show of state.shows) {
        if (show.id !== action.show.id) {
          updatedShows.push(show);
        }
      }
      return Object.assign(
        state,
        {shows: updatedShows},
        {showIDs: updatedShowIDs});

    default:
      return state;
  }
}

export const RootReducer = combineReducers({
	ShowDatabase: ShowDatabaseReducer,
  UserData: ShowUserReducer
});
