import { GETMOVIES, ADDMOVIEFAVORITE, GETMOVIEDETAIL, REMOVEMOVIEFAVORITE } from "./actions-type";





// ACTION CREATORS
export function addMovieFavorite(payload) {
    return { 
        type: ADDMOVIEFAVORITE, 
        payload 

        };
  }

  export function removeMovieFavorite(payload) {
    return { 
        type: REMOVEMOVIEFAVORITE, 
        payload 

        };
  }

  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=fad82a37&s=" + titulo)
        .then(response => response.json()) // paso el json a objeto
        .then(obj => { // es un obj
          dispatch({ type: GETMOVIES, payload: obj });
        });
    };
  }

  export function getMovieDetail(idMovie) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=fad82a37&i=${idMovie}`) // se hace la solicitud al servidor
        .then(response => response.json()) 
        .then(obj => {
          dispatch({ type: GETMOVIEDETAIL, payload: obj });
        });
    };
  }
  