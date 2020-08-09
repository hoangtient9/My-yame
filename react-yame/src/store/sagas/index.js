import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {fetchProductsSaga} from './home';
import {fetchSearchSaga} from './search';
import {fetchProductInfoSaga} from './productInfo';
import {getCheckoutSaga, setCheckoutSaga} from './checkout';

export function* watchProducts() {
    yield takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga)
}

export function* watchSearch() {
    yield takeEvery(actionTypes.FETCH_SEARCH, fetchSearchSaga)
}

export function* watchProductInfo() {
    yield takeEvery(actionTypes.FETCH_PRODUCT_INFO, fetchProductInfoSaga)
}
export function* watchCheckout() {
    yield takeEvery(actionTypes.GET_CHECKOUT, getCheckoutSaga)
    yield takeEvery(actionTypes.SET_CHECKOUT, setCheckoutSaga)
}