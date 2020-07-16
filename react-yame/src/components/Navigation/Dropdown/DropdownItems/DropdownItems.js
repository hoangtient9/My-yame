import React, {useState, useRef} from 'react';

import classes from './DropdownItems.module.scss'
import DropdownItem from './DropdownItem/DropdownItem';

const DropdownItems = props => {
    const [show, setShow] = useState(false);
    const [height, setHeight] = useState('0px')
    const myRef = useRef(null)

    const showHandler = () => {
        setShow(!show)
        setHeight(!show ? `${myRef.current.scrollHeight}px` : '0px')
    }

    return (
        <li className={classes.ListLi}>
            {props.items[0]}
            {
            props.items.length >= 2 ?
            !show ? <span className="material-icons" onClick={showHandler}>keyboard_arrow_up</span> : 
            <span className="material-icons" onClick={showHandler}>keyboard_arrow_down</span> :
            null
            }
            <ul style={{maxHeight: height}} ref={myRef} className={classes.DropdownItems}>
                {
                    props.items.filter((e, idx) => idx !== 0).map((item, i) => (
                        <DropdownItem key={i}>{item}</DropdownItem>
                    ))
                }
            </ul>
        </li>
    )
}

export default DropdownItems;