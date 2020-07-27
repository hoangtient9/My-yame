import React, { Fragment, useEffect, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Poster from '../../components/Products/NewPoster/Poster';
import Products from '../../components/Products/Products';
import BigPoster from '../../components/Products/BigPoster/BigPoster';
import * as actions from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios';

const Home = props => {
    const dispatch = useDispatch();
    const onFetchProducts = useCallback(() => dispatch(actions.fetchProducts()), [dispatch]);

    useEffect(() => {
        onFetchProducts()
    }, [onFetchProducts])

    return (
        <Fragment>
            <BigPoster link='https://cdn2.yame.vn/cimg/images/e55cc89a-1deb-0100-de9f-0016ff5a95b4.jpg'/>
            <Poster />
            <Products />
            <BigPoster link='https://cdn2.yame.vn/cimg/images/75ebdabd-9480-0100-3d82-0016ef081a94.jpg' />
            <Products />
        </Fragment>
    )
}

export default withErrorHandler(Home, axios);