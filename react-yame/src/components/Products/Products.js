import React from 'react';

import classes from './Products.module.scss';
import Product from './Product/Product';

const Products = props => {
    const products = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className={classes.Products}>
            {
                products.map((p, i) => (
                    <Product key={i}/>
                ))
            }
        </div>
    )
}

export default Products;