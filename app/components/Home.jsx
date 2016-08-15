import React from 'react';
import { Jumbotron } from 'react-bootstrap/';
import { Button, ButtonToolbar } from 'react-bootstrap/lib'

const alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];

const genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
      'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
      'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
      'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
      'Travel'];

export default React.createClass({
    render() {
    	return (
    		<div>
    			<Jumbotron>
	                <ul className="alphabet">
	                	{alphabet.map((char) => 
	                		<li key={char}> {char} </li>
	                	)}
	                </ul>
	                <ul className="genres">
	                	<ButtonToolbar>
	                		{genres.map((genre) =>
	                			<Button btnStyle="info">{genre}</Button>
                			)}
	                	</ButtonToolbar>

	                </ul>
	            </Jumbotron>
            </div>
    	);
    }
});
