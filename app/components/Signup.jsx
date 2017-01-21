import React from 'react';

class Signup extends React.Component {
 	render() {
		return (
			<div>
        <br/>
        <br/>
        <form>

          <div className="top-row">
            <div id="firstname" className="field-wrap">
              <input type="text" placeholder="First Name" required="" autocomplete="off"/>
            </div>

            <div id="lastname" className="field-wrap">
              <input type="text" placeholder="Last Name" required="" autocomplete="off"/>
            </div>
          </div>

          <br/>
          <br/>
          <div className="field-wrap">
            <input type="text" placeholder="Username" required="" autocomplete="off"/>
          </div>

          <br/>

          <div className="field-wrap">
            <input type="email" placeholder="Email Address" required="" autocomplete="off"/>
          </div>

          <br/>

          <div className="field-wrap">
            <input type="password" placeholder="Set A Password" required="" autocomplete="off"/>
          </div>

          <br/>

          <button type="submit" className="button button-block">Get Started</button>

        </form>
			</div>
		);
	}
}

export default Signup;
