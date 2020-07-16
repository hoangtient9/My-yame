import React from 'react'

import classes from  './Dropdown.module.scss';
import DropdownItems from './DropdownItems/DropdownItems';

const Dropdown = props => {

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

    return (
        <div className={classes.Dropdown}>
            <span className="material-icons">view_headline</span>
            <span className="material-icons">keyboard_arrow_down</span>
            <div>
                <ul>
                    {listUl}
                </ul>  
            </div>
        </div>
    )
}

export default Dropdown;