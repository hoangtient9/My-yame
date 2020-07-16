import React from 'react';

import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
// import Dropdown from '../Dropdown/Dropdown';
import ToolbarIcons from './ToolbarIcons/ToolbarIcons';

const Toolbar = props => {

    return (
        <header className={classes.Toolbar}>
            <div>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                    {/* <Dropdown /> */}
                </nav>
                <ToolbarIcons clicked={props.sideDrawerToggleClicked}/>
            </div>
            
        </header>
    )
}

export default Toolbar;