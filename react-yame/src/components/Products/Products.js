import React from 'react';

import classes from './Products.module.scss';
import Product from './Product/Product';

const Products = props => {
    return (
        <div className={classes.Products}>
            {
                props.data.map((p, i) => (
                    <Product key={i} data={p}/>
                ))
            }
        </div>
    )
}

export default Products;