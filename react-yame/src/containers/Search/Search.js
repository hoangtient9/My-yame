import React, { Fragment, useEffect, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as actions from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Products from '../../components/Products/Products';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import NotFound from '../../components/NotFound/NotFound';

const Search = props => {
    const dispatch = useDispatch();
    const onFetchSearch = useCallback((k, q) => dispatch(actions.fetchSearch(k, q)), [dispatch]);

    const productsData = useSelector(state => state.search.products);
    const loading = useSelector(state => state.search.loading);
    const error = useSelector(state => state.search.error);

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = param[1];
        }
        onFetchSearch(ingredients.k, ingredients.q)
    }, [onFetchSearch, props.location.search])

    let search = <Spinner />;

    if (!loading && productsData.length !== 0) {
        search = (
            <Fragment>
                <Products data={productsData.slice(0, 8)}/>
                <Products data={productsData.slice(8, 10)} big />
                <Products data={productsData.slice(10, 18)}/>
                <Products data={productsData.slice(18)} big/>
            </Fragment>
        )
    }

    if (!loading && productsData.length === 0) {
        search = <NotFound>No products found</NotFound>
    }
    return search
}

export default withErrorHandler(Search, axios)