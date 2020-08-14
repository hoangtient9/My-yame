import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Order from '../../components/Order/Order';

import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';


const Orders = props => {
    const dispatch = useDispatch();
    const onFetchOrders = useCallback((token, userId) => dispatch(actions.fetchOrders(token, userId)), [dispatch]);

    const ordersData = useSelector(state => state.orders.orders);
    const loading = useSelector(state => state.orders.loading);

    useEffect(() => {
        onFetchOrders();
    }, [onFetchOrders])

    let orders = <Spinner />;
    if (!loading && ordersData) {
        orders = ordersData.map(order => <Order data={order} key={order.id} />)
    }
    return orders

}

    


export default withErrorHandler(Orders, axios);