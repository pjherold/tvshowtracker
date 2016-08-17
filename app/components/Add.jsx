import React from 'react';
import { Navbar, FormGroup, FormControl, Button, Panel } from 'react-bootstrap/lib';
import actions from "../actions/actions";

export default React.createClass({
	filterJSON(data) {
		let newData = {};
		const keys = ['id','name','language','genres','status','runtime', 'premiered', 'rating', 'network', 'image', 'summary']
		for (let i in data) {
			if (keys.indexOf(i) !== -1) {
				newData[i] = data[i]
			}
		}
		if (Object.keys(newData).length > 0) {
			actions.addShow(newData);
			window.location.reload();
		}
	},

	addShow(form) {
		form.preventDefault();
		let showID = document.getElementById("showID").value;

    	let url = 'http://api.tvmaze.com/lookup/shows?imdb=' + showID;
		fetch(url, {
		    method: 'get',
		    headers: {
		        'Accept': 'application/json'
		    }
		}).then(response => response.ok ? 
							response.json() : {}).then((json) => this.filterJSON(json))
	},

	render() {
		return (
			<div>
				<Panel header="Add TV Shows">
					<Navbar>
						<form onSubmit={this.addShow}>
					        <FormGroup>
					          <FormControl id="showID" type="text"
					           placeholder="Enter TV Show IMDB ID" />
					        </FormGroup>
					        <Button className="AddButton" type="submit">Add</Button>
				        </form>
					</Navbar>
				</Panel>
				<div className="addHelp">
					<br/>
					IMDB ID is 8 character of address of the shows IMDB page.
			        <br/>
			        imdb.com/title/__ID__/
		        </div>
			</div>
		);
	}
})