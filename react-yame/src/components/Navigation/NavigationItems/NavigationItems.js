import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import Dropdown from '../Dropdown/Dropdown';




const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem>Selling</NavigationItem>
        <NavigationItem>Seal 50%</NavigationItem>
        <NavigationItem>Simple</NavigationItem>
        <NavigationItem>Design</NavigationItem>
        <NavigationItem>T-shirt</NavigationItem>
        <NavigationItem dropdown><Dropdown /></NavigationItem>
        {props.children}
    </ul>
)

export default NavigationItems;