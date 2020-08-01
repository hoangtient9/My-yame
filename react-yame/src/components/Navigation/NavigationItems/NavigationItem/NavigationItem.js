import React, { useCallback } from 'react';
import {useDispatch} from 'react-redux';
// import {NavLink} from 'react-router-dom';

import classes from './NavigationItem.module.scss';
import * as actions from '../../../../store/actions/index';

const NavigationItem = props => {
    const dispatch = useDispatch();

    const onFetchSearch = useCallback(() => dispatch(actions.fetchSearch(props.title)), [dispatch, props.title]);
    return (
        <li className={classes.NavigationItem} onClick={onFetchSearch}>
            <a href='#1'>{props.children}</a>
        </li>
    )
}

export default NavigationItem;