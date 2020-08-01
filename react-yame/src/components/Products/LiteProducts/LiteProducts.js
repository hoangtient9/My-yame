import React from 'react';

import classes from './LiteProducts.module.scss';
import Product from '../Product/Product';

const LiteProducts = props => {
    return (
        <div className={classes.LiteProducts}>
            {
                props.data.map((product, i) => (
                    <div key={i}>
                        <Product data={product}/>
                    </div>
                ))
            }
        </div>
    )
}

export default LiteProducts;