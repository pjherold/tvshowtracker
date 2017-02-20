import React from "react";
import ReactDOM from "react-dom"
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import App from "./components/App.jsx";
import Add from "./components/Add.jsx";
import Profile from "./components/Profile.jsx";
import ShowPage from "./components/ShowPage.jsx";
import UserAuthen from "./components/UserAuthen.jsx";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from "redux-logger";
import { RootReducer, addShowtoDatabaseReducer } from './reducers/RootReducer';
import request from 'ajax-request';

let initialState = {
	ShowDatabase: {
		shows: [],
		showIDs: []
	},
	UserData: {
		loggedIn: false,
		name: null,
		email: null,
		shows: [],
		showIDs: []
	}
};
request({
	url: '/api/shows',
	method: 'GET',
},
	(err, res, data) => {
		if (err) {
			return console.log(err)
		}
		let shows = JSON.parse(data);
		shows.forEach((show) => {
			initialState.ShowDatabase.showIDs.push(show.id);
		})
		initialState.ShowDatabase.shows = shows;
		if (Object.keys(__USER).length > 0) {
			initialState.UserData.loggedIn = true;
			initialState.UserData.name = __USER.name;
			initialState.UserData.email = __USER.email;
			initialState.UserData.shows = __USER.shows;
			initialState.UserData.showIDs = __USER.showIDs;
		}
		start();
	}
);


let start = () => {
	let logger = createLogger();
	const store = createStore(RootReducer, initialState, applyMiddleware(thunk, logger));
	render(store);
}

function render(store) {
	const routes = (
		<Route path="/" component={App}>
			<Route path="/add" component={Add}/>
			<Route path="/login" component={UserAuthen}/>
			<Route path="/show/:showName" component={ShowPage}/>
			<Route path="/profile" component={Profile}/>
			<Route path="/logout"/>

		</Route>
	);
	ReactDOM.render(
		<Provider store={store}>
			<Router history={browserHistory}>
    		{ routes }
  		</Router>
		</Provider>
		, document.getElementById("app"));
}
