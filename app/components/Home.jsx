import React from 'react';
import { Jumbotron } from 'react-bootstrap/';
import { Button, ButtonToolbar, Grid, Col, Row } from 'react-bootstrap/lib';


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
        this.state = { display: this.props.shows };
        this.changeDisplayGenre = this.changeDisplayGenre.bind(this);
        this.changeDisplayChar = this.changeDisplayChar.bind(this);
    }

    changeDisplayGenre(event) {
        let newDisplay = this.props.shows.filter(
                    show => show.genres.indexOf(event.target.id) !== -1
                );
        this.setState({ display: newDisplay });
    }

    changeDisplayChar(event) {
        let newDisplay = this.props.shows.filter(
                    show => show.name[0].toUpperCase() ===
                            event.target.id.toUpperCase()
                );
        this.setState({ display: newDisplay });
    }

    displayShows() {
        return;
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
               {this.state.display.map((data) =>
                  <img src={(data.image)} />
                )}
            </div>
    	);
    }
}

export default Home;
