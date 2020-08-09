import {put} from 'redux-saga/effects';
import axios from '../../axios';

import * as actions from '../actions';
export function* fetchSearchSaga(action) {
    yield put(actions.fetchSearchStart())
    try {
        const fetchProducts = yield axios.get(`/products.json?orderBy="${action.key}"&startAt="${action.query}"&endAt="${action.query}\uf8ff"&once="value"&limitToLast=20&print=pretty`);
        const products = [];
        for (let key in fetchProducts.data) {
            products.push({
                ...fetchProducts.data[key],
                id:key
            })
        }
        yield put(actions.fetchSearchSuccess(products))

    } catch (error) {
        yield put(actions.fetchSearchFail(error.message))
    }
}