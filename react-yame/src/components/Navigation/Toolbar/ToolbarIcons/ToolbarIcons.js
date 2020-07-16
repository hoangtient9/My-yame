import React from 'react'

import classes from './ToolbarIcons.module.scss';

const ToolbarIcons = props => {
    return (
        <div className={classes.ToolbarIcons}>
            <ul>
                <li>
                    <a href='#34'>
                        <span className="material-icons">search</span>
                    </a>
                </li>
                <li>
                    <a href='#5'>
                        <span className="material-icons">perm_identity</span>
                    </a>
                </li>
                <li>
                    <a href='#6'>
                        <span className="material-icons">shopping_bag</span>
                        <div>1</div>
                    </a>
                </li>
            </ul>
            <div onClick={props.clicked}>
            <span className="material-icons">dehaze</span>
            </div>
        </div>
    )
}

export default ToolbarIcons;