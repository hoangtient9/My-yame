import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {fetchProductsSaga} from './home';
import {fetchSearchSaga} from './search';

export function* watchProducts() {
    yield takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga)
}

export function* watchSearch() {
    yield takeEvery(actionTypes.FETCH_SEARCH, fetchSearchSaga)
}