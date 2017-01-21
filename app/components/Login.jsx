import React from 'react';
import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap/lib';

 class Login extends React.Component {
 	render() {
		return (
      <div>
        <br/>
        <br/>
        <form>
          <div className="field-wrap">
            <input type="text" placeholder="Username" required="" autoCcomplete="off"/>
          </div>
          <div className="field-wrap">
            <input type="password" placeholder="Password" required="" autoCcomplete="off"/>
          </div>

          <p className="forgot"><a>Forgot Password?</a></p>

          <button type="submit" className="button button-block">Log In</button>

        </form>
      </div>
		);
	}
}

export default Login;
