import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

export class Movie extends React.Component {
    componentDidMount() {    // lo necesito utilizar xq es el que va a renderizar toda la info 
        const movieId = this.props.match.params.id; // accedo a los params.id del browser y lo guardo en una constante
        this.props.getMovieDetail(movieId)  // invoco el action creator pasandolo como parametro los params
    }


    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula 
                <h2>{`Título: ${this.props.moviesdetail.Title}`}</h2> 
                <img src={this.props.moviesdetail.Poster} alt="Img not found"/>
                <h4>{`Año: ${this.props.moviesdetail.Year}`}</h4>
                <h4>{`Duración: ${this.props.moviesdetail.Runtime}`}</h4>
                <h4>{`Elenco: ${this.props.moviesdetail.Actors}`}</h4>
                <h4>{`Director: ${this.props.moviesdetail.Director}`}</h4> 
            </div>
        );
    }
}
// NOTA: uso this. xq es un comp de clase, 
//           moviesdetail. xq es donde yo guarde la data que me traigo del global state, 
//           las demas propiedades las saco del obj que me devolvio la api (fijarse con redux dev tools en el browser)

function mapStateToProps(state) {
    return {
            moviesdetail: state.movieDetail,
    }
  }
  


export default connect (mapStateToProps, {getMovieDetail})(Movie);