import React from "react";
import ReactDOM from "react-dom"
import { Router, Route, hashHistory } from 'react-router'
import App from "./components/App.jsx";
import Add from "./components/Add.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import ShowPage from "./components/ShowPage.jsx";
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
	}
};
request({
	url: '/api/shows',
	method: 'GET',
},
(err, res, data) => {
	if (err) {
		console.log(err)
	} else {
		let shows = JSON.parse(data);
		shows.forEach((show) => {
			initialState.ShowDatabase.showIDs.push(show.id);
		})
		initialState.ShowDatabase.shows = shows;
	}
	start();
});

let start = () => {
	let logger = createLogger();
	const store = createStore(RootReducer, initialState, applyMiddleware(thunk, logger));
	render(store);
}



function render(store) {
	const routes = (
		<Route path="/" component={App}>
			<Route path="/add" component={Add}/>
			<Route path="/login" component={Login}/>
			<Route path="/signup" component={Signup}/>
			<Route path="/show/:showName" component={ShowPage}/>
		</Route>
	);
	ReactDOM.render(
		<Provider store={store}>
			<Router history={hashHistory}>
    		{ routes }
  		</Router>
		</Provider>
		, document.getElementById("app"));
}
