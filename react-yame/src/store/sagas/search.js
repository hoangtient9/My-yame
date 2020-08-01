import {put} from 'redux-saga/effects';
import axios from '../../axios';

import * as actions from '../actions';
export function* fetchSearchSaga(action) {
    yield put(actions.fetchSearchStart())
    try {
        const fetchProducts = yield axios.get('/products.json?orderBy="deliveryMethod"&equalTo="T-shirt"&limitToFirst=20&print=pretty');
        console.log(fetchProducts)
        const products = [];
        for (let key in fetchProducts.data) {
            products.push({
                ...fetchProducts.data[key],
                id:key
            })
        }
        console.log(products)
        yield put(actions.fetchSearchSuccess(products))

    } catch (error) {
        yield put(actions.fetchSearchFail(error))
    }
}