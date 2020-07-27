import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';



const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem>Shirt</NavigationItem>
        <NavigationItem>Pant</NavigationItem>
        <NavigationItem>Shoe</NavigationItem>
        <NavigationItem>Balo</NavigationItem>
        <NavigationItem>T-shirt</NavigationItem>
        <NavigationItem>Sandal</NavigationItem>
    </ul>
)

export default NavigationItems;