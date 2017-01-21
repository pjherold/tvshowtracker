import React from 'react';
import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap/lib';
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

const STYLE = {
    background: 'rgba(19, 35, 47, 0.9)',
    color: 'white',
    padding: 40,
    maxWidth: 600,
    margin: '40px auto',
    borderRadius: 4,
    boxShadow: '0 4px 10px 4px rgba(19, 35, 47, 0.3)'
}
const TAB_STYLE = { backgroundColor: '#ffd800' }

 class UserAuthen extends React.Component {
   constructor(props) {
     super(props);
     this.changeView = this.changeView.bind(this);
     this.state = { view: 'Login'}
     this.loginTabStyle = TAB_STYLE;
     this.signupTabStyle = {};
   }

   changeView(event) {
     if (event.target.id === 'Login') {
       this.setState({ view: 'Login' });
       this.loginTabStyle = TAB_STYLE;
       this.signupTabStyle = {};
     } else {
       this.setState({ view: 'Signup' });
       this.loginTabStyle = {};
       this.signupTabStyle = TAB_STYLE;
     }
   }

   renderType() {
     if (this.state.view === 'Login') {
       return (
         <Login />
       )
     }
     return (
       <Signup />
     )
   }

 	 render() {
		  return (
        <div className="form" style={STYLE}>
          <ul className="tab-group">
            <li className="tab" id="Login" style={this.loginTabStyle} onClick={this.changeView}>Log In</li>
            <li className="tab" id="Signup" style={this.signupTabStyle} onClick={this.changeView}>Sign Up</li>
          </ul>
          {this.renderType()}
        </div>
		  );
	 }
}

export default UserAuthen;
