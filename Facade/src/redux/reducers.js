import {combineReducers} from "redux";
import types from "./action-types";

function movies(state = [], action) {
    switch (action.type) {
        case types.SET_MOVIES: {
            return [...action.payload];
        }

        default:
            return state;
    }
}

function favoriteMovies(state=[], action){
    switch (action.type) {
        case types.ADD_FAVORITE_MOVIE: {
            return [...state, action.payload];
        }
        case types.REMOVE_FAVORITE_MOVIE: {
            state.splice(action.payload, 1)
            return [...state];
        }
        default:
            return state;
    }
}

function error(state = {}, action) {
    switch (action.type) {
        case types.SET_ERROR: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

//mine
function articles(state = [], action) {
    switch (action.type) {
        case types.SET_ALL_ARTICLES: {
            return [...action.payload];
        }
        case types.REMOVE_ARTICLE: {
            return [...action.payload];
        }

        default:
            return state;
    }
}

function article(state = [], action) {
    switch (action.type) {
        case types.SET_ARTICLE: {
            return {...action.payload};
        }

        default:
            return state;
    }
}

export default combineReducers({movies, favoriteMovies, error, articles, article});