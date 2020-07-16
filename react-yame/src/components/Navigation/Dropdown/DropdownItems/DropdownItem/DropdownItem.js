import React from 'react';

import classes from './DropdownItem.module.scss';

const DropdownItem = props => (
    <li className={classes.DropdownItem}>
        {props.children}
    </li>
)

export default DropdownItem;