import types from './action-types';
import networkClient from '../network/network-client';
import constants from '../constants';

//masquad
export function setArticles (articles) {
    return {type: types.SET_ALL_ARTICLES, payload: articles}
}

export const getArticles = () => async dispatch => {
    try {
        const res = await networkClient.get(`${constants.baseURL}/articles`);
        dispatch(setArticles(res.articles));
    } catch {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function setMovies (movies) {
    return {type: types.SET_MOVIES, payload: movies}
}
export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

export function addFavoriteMovie(movie){
    return {type: types.ADD_FAVORITE_MOVIE, payload: movie};
}

export function removeFavoriteMovie(index){
    return {type: types.REMOVE_FAVORITE_MOVIE, payload: index};
}

export const getMovies = () => async dispatch => {

    try {
        const res = await networkClient.get(
            "https://facebook.github.io/react-native/movies.json");
        dispatch(setMovies(res.movies));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }

};
