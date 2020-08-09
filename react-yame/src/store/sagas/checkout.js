import {put} from 'redux-saga/effects';

import * as actions from '../actions';

export function* getCheckoutSaga(action) {
    try {
        yield actions.getCheckoutStart()
        const checkoutData = yield sessionStorage.getItem('checkoutData');
        
        yield put(actions.getCheckoutSuccess(JSON.parse(checkoutData === null ? [] : checkoutData)))
    } catch (error) {
        yield put(actions.getCheckoutFail(error))
    }
}
export function* setCheckoutSaga(action) {
    try {
        yield sessionStorage.setItem('checkoutData', JSON.stringify(action.data));
    } catch (error) {
        yield put(actions.getCheckoutFail(error.message))
    }
}