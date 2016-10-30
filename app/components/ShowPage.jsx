import React from 'react';
import { Link } from 'react-router';


class ShowPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { show: this.props.route.shows}
	}

	render() {
		console.log(this.props.route);
		return (
			<div>
				dlfaljf
			</div>
		);
	}
} 

export default ShowPage;
