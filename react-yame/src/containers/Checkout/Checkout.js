import React, { Fragment, useCallback, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import CheckoutData from '../../components/CheckoutData/CheckoutData';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import NotFound from '../../components/NotFound/NotFound';

const Checkout = props => {

    const dispatch = useDispatch();
    const onGetCheckout = useCallback(() => dispatch(actions.getCheckout()), [dispatch]);

    const checkoutData = useSelector(state => state.checkout.checkout);
    const loading = useSelector(state => state.checkout.loading);

    useEffect(() => {
      onGetCheckout()
    }, [onGetCheckout])

    const cancellHandler = () => {
        props.history.goBack()
    }

    let checkout = <Spinner />;

    if (!loading || checkoutData.length === 0) {
        checkout = <NotFound>No products found</NotFound>
    }

    if (!loading && checkoutData.length !== 0) {
        checkout = (
            <Fragment>
                <CheckoutData data={checkoutData} cancell={cancellHandler} />
            </Fragment> 
        )
    }

    return checkout
}

export default Checkout;