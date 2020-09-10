import React, { Component } from 'react';

const api_key = '4287ad07'

class SearchBar extends Component {
 
    // iniciamos el estado del input en vacio
    state = {
        inputMovie: ''
    }

    handleChange = (e) => {
        // actualizamos el estado del input con el valor que ingresa el usuario en el ipunt gracias al setstate
        // con e.target.value recuperamos lo que se ingresa en el input y se utiliza para actualizar su estado
        this.setState({inputMovie: (e.target.value)})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        fetch(`http://www.omdbapi.com/?apikey=${api_key}&s=${this.state.inputMovie}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // extraemos los parametros search y total results de la api que estamos consumiento que vienen en data
                const {Search = [], TotalResults = 0} = data
                console.log({Search, TotalResults})
                this.props.onResults(Search)
            })
    }


    render() {
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" onChange={this.handleChange} type="text" placeholder="Find a Movie"/>
                        </div>
                        <div className="control">
                            <button className="button is-info" href="/">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;