import {put} from 'redux-saga/effects';
import axios from '../../axios';

import * as actions from '../actions';
export function* fetchProductsSaga(action) {
    yield put(actions.fetchProductsStart())
    try {
        const fetchBigPoster = yield axios.get('/bigposter.json?orderBy="$value"&limitToFirst=2&print=pretty');
        const fetchNewPoster = yield axios.get('/newposter.json?orderBy="$value"&limitToFirst=4&print=pretty');
        const fetchProducts = yield axios.get('/products.json?orderBy="$value"&limitToFirst=16&print=pretty');
        console.log(fetchProducts)
        const bigPoster = [];
        const newPoster = [];
        const products = [];
        for (let key in fetchBigPoster.data) {
            bigPoster.push({
                ...fetchBigPoster.data[key],
                id:key
            })
        }
        for (let key in fetchNewPoster.data) {
            newPoster.push({
                ...fetchNewPoster.data[key],
                id:key
            })
        }
        for (let key in fetchProducts.data) {
            products.push({
                ...fetchProducts.data[key],
                id:key
            })
        }
        yield put(actions.fetchProductsSuccess({
            bigPoster: bigPoster,
            newPoster: newPoster,
            products: products
        }))

    } catch (error) {
        yield put(actions.fetchProductsFail(error))
    }
}
