import React from 'react';
import { Navbar, FormGroup, FormControl, Button, Panel } from 'react-bootstrap/lib';
import { connect } from 'react-redux'
import { addShowDatabase } from '../actions/addShow';


class Add extends React.Component {
	constructor(props) {
		super(props);
		this.addShow = this.addShow.bind(this);
		this.updateDatabase = this.updateDatabase.bind(this);
	}

	updateDatabase(data) {
		let newData = {};
		const keys = ['id','name','language','genres','status','runtime', 'premiered', 'rating', 'network', 'image', 'summary']
		for (let i in data) {
			if (i === 'image') {
				newData[i] = data[i].medium;
			}
			else if (keys.indexOf(i) !== -1) {
				newData[i] = data[i]
			}
		}
		if (Object.keys(newData).length > 0) {
			this.props.addShowDatabase(newData);
		}
	}

	addShow(form) {
		form.preventDefault();
		let showID = document.getElementById("showID").value;

    	let url = 'http://api.tvmaze.com/lookup/shows?imdb=' + showID;
		fetch(url, {
		    method: 'get',
		    headers: {
		        'Accept': 'application/json'
		    }
		}).then(response => response.ok ? response.json() : {}).then((json) => this.updateDatabase(json))
	}

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
}

const mapStateToProps = (state) => {
  return {
  	state: state
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addShowDatabase: (show) => {
      dispatch(addShowDatabase(show))
    }
  }
}
Add = connect(mapStateToProps, mapDispatchToProps)(Add);


export default Add;
