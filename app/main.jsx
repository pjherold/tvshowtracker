import React from "react";
import ReactDOM from "react-dom"
import { Router, Route, hashHistory } from 'react-router'
import App from "./components/App.jsx";
import Add from "./components/Add.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";


function render() {
	ReactDOM.render(
		<Router history={hashHistory}>
    		<Route path="/" component={App}>
    			<Route path="/add" component={Add}/>
    			<Route path="/login" component={Login}/>
    			<Route path="/signup" component={Signup}/>
    		</Route>
  		</Router>
		, document.getElementById("app"));
}

render();
