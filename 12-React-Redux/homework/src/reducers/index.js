import { ADDMOVIEFAVORITE, GETMOVIEDETAIL, GETMOVIES, REMOVEMOVIEFAVORITE } from "../actions/actions-type";




const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };


  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADDMOVIEFAVORITE:
      return {
          ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload)
      };
      case REMOVEMOVIEFAVORITE:
      return {
          ...state,
        moviesFavourites: state.moviesFavourites.filter((movie) => movie.id !== action.payload)
      };
      case GETMOVIES:
      return {
          ...state,
        moviesLoaded: action.payload.Search // este Search viene del json que devuelve la api { Search: }
      };
      case GETMOVIEDETAIL:
      return {
          ...state,
        movieDetail: action.payload
      };
      default:
        return state;
    }
  };