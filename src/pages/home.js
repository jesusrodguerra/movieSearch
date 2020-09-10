import React, { Component } from 'react';

import Title from '../components/title';
import SearchBar from '../components/search-bar';
import MoviesList from '../components/moviesList';


class Home extends Component {

    state = {
        busquedaInicial: false,
        data: []
      }
    
      handleResults = (data) => {
        this.setState({data, busquedaInicial: true})
      }
    
      renderResult() {
        return this.state.data.length === 0 ? <p>No results</p> : <MoviesList moviesList={this.state.data} />
      }

    render() { 
        return ( 
            <div>
                <Title />
                <div className="search-wrapper">
                    <SearchBar onResults={this.handleResults}/>
                </div>
                { this.state.busquedaInicial ? this.renderResult() : <div> Use the input for search a movie </div> }
            </div>
         );
    }
}
 
export default Home;