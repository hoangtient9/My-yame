import React from 'react';
// import {NavLink} from 'react-router-dom';

import classes from './NavigationItem.module.scss';

const NavigationItem = props => (
    <li className={classes.NavigationItem}>
        {props.dropdown ? props.children : <a href='#1'>{props.children}</a> }
    </li>
)

export default NavigationItem;