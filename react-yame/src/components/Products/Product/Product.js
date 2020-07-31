import React from 'react';
import classes from './Product.module.scss';
import Carousel from './Carousel/Carousel';

const Product = props => {
    return (
        <div className={classes.Product}>
            <div>
                <Carousel slides={props.data.addData.image.split(';')}/>
            </div>
            <div className={classes.ListImages}>
                {props.data.addData.image.split(';').map((image, i) => (
                    <div key={i}>
                        <img src={image} alt='anh loi' />
                    </div>
                ))}
            </div>
            <div className={classes.Price}>
                <span>{props.data.addData.price}</span>
            </div>
        </div>
    )
}

export default Product;