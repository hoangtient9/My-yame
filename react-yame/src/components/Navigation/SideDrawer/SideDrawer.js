import React, { Fragment } from 'react';

import classes from './SideDrawer.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import DropdownItems from '../Dropdown/DropdownItems/DropdownItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const lists = [
    ['Áo Khoác', 'Áo Hoodie'],
    ['Sơ Mi'],
    ['Quần dài', 'Quần Jean cá tính', 'Quần Jean đơn giản', 'Quần Jogger', 'Quần Kaki', 'Quần Tây'],
    ['Quần Short'],
    ['Giày Nam', 'Giày SALE'],
    ['Sandal-Dép', 'Sandal Nam', 'Dép Nam'],
]

const listUl = lists.map((e, i) => (
    <DropdownItems items={e} key={i}/>
));


const SideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <NavigationItems >{listUl}</NavigationItems>
            </div>
        </Fragment>
    )
}

export default SideDrawer;