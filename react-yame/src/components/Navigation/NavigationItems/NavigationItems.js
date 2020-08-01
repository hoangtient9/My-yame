import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';



const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem title='shirt'>Shirt</NavigationItem>
        <NavigationItem title='pant'>Pant</NavigationItem>
        <NavigationItem title='shoe'>Shoe</NavigationItem>
        <NavigationItem title='balo'>Balo</NavigationItem>
        <NavigationItem title='t-shirt'>T-shirt</NavigationItem>
        <NavigationItem title='sandal'>Sandal</NavigationItem>
    </ul>
)

export default NavigationItems;