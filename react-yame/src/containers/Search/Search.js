import React, { Fragment, useEffect, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as actions from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Products from '../../components/Products/Products';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
// import LiteProducts from '../../components/Products/LiteProducts/LiteProducts';

const Search = props => {
    const dispatch = useDispatch();
    const onFetchSearch = useCallback(() => dispatch(actions.fetchSearch()), [dispatch]);

    const productsData = useSelector(state => state.search.products);
    const loading = useSelector(state => state.search.loading);

    useEffect(() => {
        onFetchSearch()
    }, [onFetchSearch])

    let search = <Spinner />;

    if (!loading && productsData) {
        search = (
            <Fragment>
                <Products data={productsData.slice(0, 8)}/>
                <Products data={productsData.slice(8, 10)} />
                <Products data={productsData.slice(10, 18)}/>
                <Products data={productsData.slice(18)} />
            </Fragment>
        )
    }
    return search
}

export default withErrorHandler(Search, axios)