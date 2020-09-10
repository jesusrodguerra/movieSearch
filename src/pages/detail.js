import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonBack from '../components/buttonBack';

const api_key = '4287ad07'

class Detail extends Component {

    static propTypes = {
        // props inyectadas por react router dom, aqui estara la id de la pelicula
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    } 

    state = {
        data: {}
    }

    fetchData( {id} ) {
        fetch(`http://www.omdbapi.com/?apikey=${api_key}&i=${id}`)
            .then(res => res.json())
            .then(data => {
                console.log({data})
                this.setState({data})
            })
    }

    componentDidMount() {
        const {id} = this.props.match.params
        this.fetchData({id})
    }

    goBack() {
        window.history.back()
    }

    render() { 

        const {Title, Poster, Actors, Runtime} = this.state.data
      
        return ( 
            <div>
                <section className="hero is-success is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                {Title}
                            </h1>
                            <img style={{width: '300px'}} src={Poster} alt={Title}/>
                            <h2 className="subtitle">
                                Cast: {Actors}
                            </h2>
                            <h2> Duration: {Runtime} </h2>
                            <ButtonBack/>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Detail;