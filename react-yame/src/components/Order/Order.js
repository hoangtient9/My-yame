import React from 'react';

import classes from './Order.module.scss';
import {convertNumber} from '../../shared/ultility'

const Order = props => {
    const listOrder = [];

    for (let key in {...props.data.orderData}) {
        listOrder.push({
            ...props.data.orderData[key],
            index: key
        })
    }
    
    return (
        <div className={classes.Order}>
            <h5>{props.data.id}</h5>
            <div>
                {listOrder.map((el, i) => (
                    <div key={i}>
                        <p>{el.name}</p>
                        <p>{`${el.color} / ${el.size}, ${convertNumber(el.price)}`}</p>
                        <p>{`Quantity: ${el.quantity}, totalPrice: ${convertNumber(el.quantity * el.price)}`}</p>
                    </div>
                ))}


            </div>
            <p>{`Total: ${convertNumber(listOrder.reduce((a,b) => a + (b.price * b.quantity), 0))}`}</p>
        </div>
    )
}

export default Order;