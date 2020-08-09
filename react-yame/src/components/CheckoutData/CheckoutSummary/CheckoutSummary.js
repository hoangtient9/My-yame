import React, { useCallback} from 'react';
import {useDispatch} from 'react-redux';

import classes from './CheckoutSummary.module.scss';
import * as actions from '../../../store/actions/index';


const CheckoutSummary = props => {

    const dispatch = useDispatch();
    const onGetCheckout = useCallback(() => dispatch(actions.getCheckout()), [dispatch]);
    const onSetCheckout = useCallback((data) => dispatch(actions.setCheckout(data)), [dispatch]);

    const updatedCheckoutElement = (id, color, size,  amount) => {
        const update = props.checkout.map(el => {
            if (el.id === id && el.color === color && el.size === size){
                return {
                    ...el,
                    amount: amount
                }
            }
            return el
       })
       onSetCheckout(update)
       onGetCheckout();
       
   }

   const deleteCheckoutHandler = (id, color, size) => {
       const updated = props.checkout.filter(el => {
            return el.id !== id || ((el.id === id && (el.color !== color || el.color === color) && el.size !== size) || (el.id === id && el.color !== color && (el.size !== size || el.size === size)) )
       })
       onSetCheckout(updated)
       onGetCheckout();

   }

    const formChangedHandler = (event, id, color, size) => {

        if (!event.target.value) {
            return
        }
        if (event.target.value && event.target.value > 0 && event.target.value <= 100){

            updatedCheckoutElement(id, color, size, +event.target.value)
        }
    }

    const subtractHandle = (id, color, size, amount) => {
        if(amount <= 1){
            return
        }
        updatedCheckoutElement(id, color, size, amount - 1)
    }

    const addHandle = (id, color, size, amount) => {
        if(+amount >= 100){
            return
        }
        updatedCheckoutElement(id, color, size, +amount + 1 <= 100 ? +amount + 1 : amount)
    }
    
    return (<div className={classes.CheckoutSummary}>
        <div className={classes.Title}>
            <h4>order details</h4>
        </div>
        {props.checkout.map((element, index) => {
            return (
                <div className={classes.Detail} key={index}>
                    <div className={classes.Image}>
                        <img 
                        src={element.image} 
                        alt='anh oi'
                        style={{
                            width: '100%'
                        }} />
                    </div>
                    <div className={classes.Info}>
                        <div >
                            <p>{element.name}</p>
                            <p>{`${element.color}, ${element.size} / ${(element.price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}`}</p>
                        </div>
                        <div>
                            <div>
                                <button onClick={() => subtractHandle(element.id, element.color, element.size, element.amount)}><span className="material-icons">remove</span></button>
                                <input  type="number" value={element.amount} onChange={(event) => formChangedHandler(event, element.id, element.color, element.size, element.amount)}/>
                                <button onClick={() => addHandle(element.id, element.color, element.size, element.amount)}><span className="material-icons">add</span></button>
                            </div>

                        </div>
                        <div><p>{`= ${(element.price * element.amount).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}`}</p></div>
                    </div>
                    <div className={classes.Delete}>
                        <button onClick={() => deleteCheckoutHandler(element.id, element.color, element.size)}><span className="material-icons">delete</span></button>
                    </div>
                </div>
            )
        })}
        
        
        <div className={classes.Amount}>
        <p>{`TOTAL: ${(props.checkout.reduce((a,b) => a + (b.price * b.amount), 0)).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}`}</p>
        </div>
    </div>
    )
}

export default CheckoutSummary;