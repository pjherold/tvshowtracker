import React from 'react';

class Signup extends React.Component {
 	render() {
		return (
			<div>
        <br/>
        <br/>
        <form action="signup" method="post">

          <div className="top-row">
            <div id="firstname" className="field-wrap">
              <input type="text" name="firstname" placeholder="First Name" required="" autocComplete="off"/>
            </div>

            <div id="lastname" className="field-wrap">
              <input type="text" name="lastname" placeholder="Last Name" required="" autocComplete="off"/>
            </div>
          </div>

          <br/>
          <br/>

          <div className="field-wrap">
            <input type="email" name="email" placeholder="Email Address" required="" autocComplete="off"/>
          </div>

          <br/>

          <div className="field-wrap">
            <input type="password" name="password" placeholder="Set A Password" required="" autoComplete="off"/>
          </div>

          <br/>
          <button type="submit" className="button button-block">Get Started</button>

        </form>
			</div>
		);
	}
}

export default Signup;
