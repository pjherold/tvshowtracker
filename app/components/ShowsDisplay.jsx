import React from 'react';

const NumDisplay = 12;

class ShowsDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = { shows: this.props.shows, page: 1 };
        const maxPages = Math.ceil(this.state.shows.length / NumDisplay);

        this.display = this.display.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ shows: nextProps.shows, page: 1 })
	}

	getPageShows() {
		let start = NumDisplay * ( this.state.page - 1 );
		let end = NumDisplay * this.state.page;
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

	display() {
		const shows = this.getPageShows();
		const showRows = this.getShowRows(shows);
		return (
			<div className="pageshows">
	           {Object.keys(showRows).sort().map(row =>
	           	  <div className="Row">
	           	  	{showRows[row].map(data =>
	           	  	  <div className='showContainer'>
		                <img src={(data.image)} />
		                Dfae
		              </div>
	           	  	)}
	              </div>
	            )}
	        </div>
		);
	}

	render() {
		const shows = this.getPageShows();
		const showRows = this.getShowRows(shows);
		return (
			<div className="pageshows">
	           {Object.keys(showRows).sort().map(row =>
	           	  <div className="Row">
	           	  	{showRows[row].map(data =>
	           	  	  <div className='showContainer'>
		                <img src={(data.image)} />
		                Dfae
		              </div>
	           	  	)}
	              </div>
	            )}
	        </div>
		);
	}
}

export default ShowsDisplay;
