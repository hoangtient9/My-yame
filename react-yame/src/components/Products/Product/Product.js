import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Product.module.scss';
import Carousel from './Carousel/Slides';

const Product = props => {
    return (
        <div className={classes.Product}>
            <Link to={`/product/${props.data.id}`}>
            <div>
              <Carousel slides={props.data.image.split(';')}/>
            </div>
            <div className={classes.ListImages}>
                {props.data.image.split(';').map((image, i) => (
                    <div key={i}>
                        <img src={image} loading='lazy' alt='anh loi' />
                    </div>
                ))}
            </div>
            <div className={classes.Price}>
                <span>{(props.data.price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</span>
            </div>
            </Link>
        </div>
    )
}

export default Product;