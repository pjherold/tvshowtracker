import React from "react";
import ReactDOM from "react-dom"
import { Router, Route, hashHistory } from 'react-router'
import App from "./components/App.jsx";
import Add from "./components/Add.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
const Store = require("./stores/Store");
const service = require("./services/Service");

let _shows = [];
let getShowsCallback = function(shows) {
	_shows = shows;
	render(_shows);
}



Store.onChange(getShowsCallback);

function render(x=0) {
	const routes = (
		<Route shows={x} path="/" component={App}>
			<Route shows={x} path="/add" component={Add}/>
			<Route shows={x} path="/login" component={Login}/>
			<Route shows={x} path="/signup" component={Signup}/>
		</Route>
	);
	ReactDOM.render(
		<Router history={hashHistory}>
    		{ routes }
  		</Router>
		, document.getElementById("app"));
}

service.getShows().then(x => render(x));
