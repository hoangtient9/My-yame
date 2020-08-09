import React from 'react'

import classes from './ToolbarIcons.module.scss';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

const ToolbarIcons = props => {
    const checkoutData = useSelector(state => state.checkout.checkout);
    
    return (
        <div className={classes.ToolbarIcons}>
            <ul>
                <li onClick={props.show}>
                    <span className="material-icons">search</span>
                </li>
                <li>
                    <a href='#5'>
                        <span className="material-icons">perm_identity</span>
                    </a>
                </li>
                <li>
                    <Link to='/checkout'>
                        <span className="material-icons">shopping_bag</span>
                        <div>{checkoutData ? checkoutData.length : 0}</div>
                    </Link>
                </li>
            </ul>
            <div onClick={props.clicked}>
            <span className="material-icons">dehaze</span>
            </div>
        </div>
    )
}

export default ToolbarIcons;