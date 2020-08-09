import * as actionTypes from './actionTypes';

export const fetchSearchStart = () => {
    return {
        type: actionTypes.FETCH_SEARCH_START
    }
}
export const fetchSearchSuccess = (data) => {
    return {
        type: actionTypes.FETCH_SEARCH_SUCCES,
        products: data,
    }
}
export const fetchSearchFail = (error) => {
    return {
        type: actionTypes.FETCH_SEARCH_FAIL,
        error: error
    }
}

export const fetchSearch = (key,query) => {
    return {
        type: actionTypes.FETCH_SEARCH,
        query: query,
        key: key
    }
}