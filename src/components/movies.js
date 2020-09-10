import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Movie extends Component {
    
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
    }

    render() { 
        const { id, title, year, poster} = this.props
        return ( 
            <Link to={`/detail/${id}`} style={{margin: '12px'}} >
                <div className="card" style={{width: '300px', marginTop: '6px'}}>
                    <div className="card-image">
                        <figure className="image">
                            <img style={{width: '300px'}} src={poster} alt={title}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title" style={{fontSize:'15px'}} > {title} </p>
                                <p className="subtitle is-6"> {year} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
         );
    }
}
 
export default Movie;