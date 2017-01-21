import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap/lib';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './Home.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	renderHome() {
		if (this.props.children === null) {
			return (
				<Home />
			);
		}
	}

  render() {
  	return (
  		<div className="abs">
    		<Navbar>
    			<Navbar.Header>
    				<Navbar.Brand>
      				<a>TVShowTracker</a>
    				</Navbar.Brand>
    			</Navbar.Header>
    			<Nav>
    				<LinkContainer to="/">
      				<NavItem eventKey={1} href="#">Home</NavItem>
      			</LinkContainer>
    				<LinkContainer to="/add">
			    		<NavItem eventKey={2} href="#">Add</NavItem>
			    	</LinkContainer>
				</Nav>
				<Nav pullRight>
					<LinkContainer to="/login">
				    <NavItem eventKey={3} href="#">Login/Sign Up</NavItem>
				  </LinkContainer>
				  
			    </Nav>
			 </Navbar>
			{this.props.children}
			{this.renderHome()}
		</div>
  	);
  }
}

export default App;
