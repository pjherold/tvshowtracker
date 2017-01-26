import React from 'react';
import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap/lib';

 class Login extends React.Component {
 	render() {
		return (
      <div>
        <br/>
        <br/>
        <form method="post">
          <div className="field-wrap">
            <input type="email" name="email" placeholder="Email" required="" autoComplete="off"/>
          </div>
          <div className="field-wrap">
            <input type="password" name="password" placeholder="Password" required="" autoComplete="off"/>
          </div>

          <p className="forgot"><a>Forgot Password?</a></p>

          <button type="submit" className="button button-block">Log In</button>

        </form>
      </div>
		);
	}
}

export default Login;
