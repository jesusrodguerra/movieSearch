import React, { Component } from 'react';
import Movies from './movies';
import PropTypes from 'prop-types';

class MoviesList extends Component {

    static propTypes = {
        moviesList: PropTypes.array
    }

    render() { 

        return <div className="columns">
            {
                this.props.moviesList.map(result => {
                    return <Movies key={result.imdbID}
                                   id={result.imdbID}
                                   title={result.Title}
                                   poster={result.Poster}
                                   year={result.Year}
                    />
                  })
            }
        </div>
    }
}
 
export default MoviesList;