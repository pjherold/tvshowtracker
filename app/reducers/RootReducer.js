import { combineReducers } from 'redux';
import * as ActionTypes from '../constants/ActionTypes';



const ShowDatabaseReducer = (state={}, action) => {
  switch(action.type) {
    case ActionTypes.ADD_SHOW_FULFILLED:
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


export const RootReducer = combineReducers({
	ShowDatabase: ShowDatabaseReducer
});
