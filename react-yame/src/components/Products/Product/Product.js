import React from 'react';
import classes from './Product.module.scss';
import Carousel from './Carousel/Carousel';

const Product = props => {
    const listImg = [
        {link:'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-bd-b12-0019707/96c1db08-a728-9900-0de1-0016fad75338.jpg?w=540&h=756&c=true', title: 'black'},
        {link:'https://cdn2.yame.vn/pimg/ao-thun-nam-y2010-bd-b10-0019693/063e9521-a05d-0100-1c0f-0016fa9eeeb1.jpg?w=540&h=756&c=true', title: 'white'},
        {link:'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-basic-ao02-0019552/a1bd0596-4d00-0600-4a6d-0016fa9fc8a1.jpg?w=800&c=true', title: 'pink'},
    ]

    return (
        <div className={classes.Product}>
            <Carousel slides={listImg}/>
            <div className={classes.ListImages}>
                {listImg.map((image, i) => (
                    <div key={i}>
                        <img src={image.link} alt={image.title} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product;