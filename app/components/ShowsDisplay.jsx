import React from 'react';
import { Button } from 'react-bootstrap/lib';
import { Link } from 'react-router';

const NumDisplay = 12;

class ShowsDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = { shows: this.props.shows, page: 1 };
        const maxPages = Math.ceil(this.state.shows.length / NumDisplay);

        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ shows: nextProps.shows });
	}

	getPageShows(page) {
		let start = NumDisplay * ( page - 1 );
		let end = NumDisplay * page;
		if (end > this.state.shows.length) {
			end = this.state.shows.length;
		}
		return this.state.shows.slice(start, end);
	}

	getShowRows(shows) {
		let showRows = {};
		let row = 0;
		let curr = 1;
		for (let i = 0; i < shows.length; i++) {
			if (Object.keys(showRows).indexOf(String(row)) === -1) {
				showRows[row] = [shows[i]];
			}
			else {
				showRows[row].push(shows[i]);
			}
			curr += 1;
			if (curr === 4) {
				curr = 1;
				row += 1;
			}
		}
		return showRows;
	}

	incrementPage() {
        this.setState({ page: this.state.page + 1 })
    }

    decrementPage() {
        this.setState({ page: this.state.page - 1 })
    }

    renderBackButton() {
        if (this.state.page > 1) {
            return (
                <Button onClick={this.decrementPage}> 
                  Previous Page
                </Button>
            );
        }
    }

    renderNextButton() {
    	if (this.getPageShows(this.state.page + 1).length > 0) {
    		return (
                <Button onClick={this.incrementPage}> 
                  Next Page
                </Button>
            );
    	}
    }

	render() {
		const shows = this.getPageShows(this.state.page);
		const showRows = this.getShowRows(shows);
		const numRows = Object.keys(showRows).length;
		return (
			<div className="pageshows" style={{height: numRows * 345 + 42 }}>
				<div>
		           {Object.keys(showRows).sort().map(row =>
		           	  <div className="Row">
		           	  	{showRows[row].map(data =>
		           	  		<Link to={"/show/"+data.id}>
			           	  	  <div className='showContainer'>
				                <img src={(data.image)} />
				                {data.name} {data.rating.average}
				              </div>
				            </Link>
		           	  	)}
		              </div>
		            )}
		        </div>
		        <div className="pageInfo">
		            {this.state.page}
		            {this.renderBackButton()}
		            {this.renderNextButton()}
		        </div>
		    </div>
		);
	}
}

export default ShowsDisplay;
