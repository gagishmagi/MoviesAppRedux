import {FETCH_MOVIE ,SEARCH_MOVIE, FETCH_MOVIES, LOADING} from './types'
import axios from 'axios';
const APIKey = process.env.REACT_APP_APIKEY;

export const searchMovie = text => dispatch =>{
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text => dispatch => {
    axios
    .get('https://www.omdbapi.com/?apikey=' + APIKey + "&s="+text)
    .then( response =>
        dispatch({
            type: FETCH_MOVIES,
            payload: response.data
        })
    )
    .catch(err => console.log(err))
}

export const fetchMovie = imdbID => dispatch => {
    axios
        .get('https://www.omdbapi.com/?apikey=' + APIKey + "&i=" + imdbID)
        .then(response =>
            dispatch({
                type: FETCH_MOVIE,
                payload: response.data
            })
        )
        .catch(err => console.log(err))
}

export const setLoading = () =>{
    return {
        type:LOADING
    }
}
