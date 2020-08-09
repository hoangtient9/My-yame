import {put} from 'redux-saga/effects';
import axios from '../../axios';

import * as actions from '../actions';

export function* fetchProductInfoSaga(action) {
    yield put(actions.fetchProductInfoStart())
    try {
        const fetchProduct = yield axios.get(`/products/${action.id}.json`);
        const product = {
            ...fetchProduct.data,
            id: action.id
        }
        console.log(product)
        yield put(actions.fetchProductInfoSuccess(product))
    } catch (error) {
        yield put(actions.fetchProductInfoFail(error.message))
    }
}