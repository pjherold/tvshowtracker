import React from 'react';
import { Jumbotron } from 'react-bootstrap/';
import { Button, ButtonToolbar } from 'react-bootstrap/lib';
import ShowsDisplay from './ShowsDisplay.jsx';
import { connect } from 'react-redux'

const alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];

const genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
      'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
      'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
      'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
      'Travel'];

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = { filteredShows: this.props.state.ShowDatabase.shows};

        this.changeDisplayGenre = this.changeDisplayGenre.bind(this);
        this.changeDisplayChar = this.changeDisplayChar.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    changeDisplayGenre(event) {
        let newDisplay = this.props.state.ShowDatabase.shows.filter(
                    show => show.genres.indexOf(event.target.id) !== -1
                );
        this.setState({ filteredShows: newDisplay });
    }

    changeDisplayChar(event) {
        let newDisplay = this.props.state.ShowDatabase.shows.filter(
                    show => show.name[0].toUpperCase() ===
                            event.target.id.toUpperCase()
                );
        this.setState({ filteredShows: newDisplay });
    }

    handleSearch(event) {
        const search = event.target.value;
        const stripSearch = search.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const len = stripSearch.length;
        this.setState({ filteredShows: this.props.state.ShowDatabase.shows.filter(show =>
                stripSearch === show.name.replace(/[^A-Za-z0-9]/g, '')
                                .toLowerCase().substring(0, len)
            ) });
    }

    render() {
    	return (
    		<div>
    			<Jumbotron>
                    <ul className="alphabet">
                    	{alphabet.map((char) =>
                    		<li onClick={this.changeDisplayChar}
                                key={char} id={char}> {char} </li>
                    	)}
                    </ul>
                    <ul className="genres">
                    	<ButtonToolbar>
                    		{genres.map((genre) =>
                    			<Button onClick={this.changeDisplayGenre}
                                        key={genre} id={genre}>{genre}
                                </Button>
                  			)}
                    	</ButtonToolbar>
                    </ul>
	            </Jumbotron>

                <div className='displayshows'>
                    <div className="searchContainer">
                        <div className="search">
                            <input type="text" onChange={this.handleSearch}/>
                        </div>
                    </div>
                    <div>
                    <ShowsDisplay shows={this.state.filteredShows}/>
                    </div>
                </div>
                <br/>
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
    getShowsDatabase: () => {
      dispatch(getShowsDatabase())
    }
  }
}
Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
