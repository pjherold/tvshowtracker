let React = require("react");
let ReactDOM = require("react-dom");
let App = require("./components/App.jsx");


function render() {
	ReactDOM.render(<App />, document.getElementById("x"));
}

render();
