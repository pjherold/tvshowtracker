const React = require("react");
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap/lib';

class App extends React.Component{
    render() {
    	return (
    		<Navbar>
    			<Navbar.Header>
      				<Navbar.Brand>
        				<a>TVShowTracker</a>
      				</Navbar.Brand>
    			</Navbar.Header>
    			<Nav>
      				<NavItem eventKey={1} href="#">Home</NavItem>
				    <NavItem eventKey={2} href="#">Add</NavItem>
				</Nav>
				<Nav pullRight>
				    <NavItem eventKey={3} href="#">Login</NavItem>
				    <NavItem eventKey={4} href="#">Sign Up</NavItem>
			    </Nav>
			 </Navbar>
    	);
    }
}

module.exports = App;
