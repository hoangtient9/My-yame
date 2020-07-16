import React from 'react';
import classes from './ProductInfo.module.scss';

const ProductInfo = props => {

    const product = {
        id: '123',
        price: '150,000',
        size: [
            'M',
            'L',
            'XL'
        ],
        name: 'Y2010 Basic AO01',
        listProducts: [
            {
                id: '1231',
                color: 'blue',
                image: 'https://cdn2.yame.vn/pimg/ao-thun-nam-y2010-basic-bc01-0019664/4b026a25-cc1e-0100-fba5-0016fdbca874.jpg?w=440'
            },
            {
                id: '1232',
                color: 'white',
                image: 'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-basic-bc01-0019664/3b0d3c08-920d-0300-a6c2-0016fdbe1ec2.jpg?w=440'
            },
            {
                id: '1233',
                color: 'pink',
                image: 'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-basic-bc01-0019664/e324142b-db14-0400-604d-0016fdbd2f3e.jpg?w=440'
            },
            {
                id: '1234',
                color: 'red',
                image: 'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-basic-bc01-0019664/e324142b-db14-0400-604d-0016fdbd2f3e.jpg?w=440'
            },
            {
                id: 'gray',
                color: 'pink',
                image: 'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-basic-bc01-0019664/e324142b-db14-0400-604d-0016fdbd2f3e.jpg?w=440'
            },
        ],
        posters: [
            'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-basic-bc01-0019664/98f83d79-e57b-0500-600d-0016fdbd68dd.jpg?w=800',
            'https://cdn2.yame.vn/pimg/ao-thun-nam-y2010-basic-bc01-0019664/8edc966d-49d4-1200-8f58-0016fdbde82e.jpg?w=800',
            'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-basic-bc01-0019664/2b91b724-7954-1300-75db-0016fdbdf604.jpg?w=800',
            'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-basic-bc01-0019664/f1633df5-f9f5-1400-a9a8-0016fdbdf607.jpg?w=800',
            'https://cdn3.yame.vn/pimg/ao-thun-nam-y2010-basic-bc01-0019664/65faee55-87ec-1500-b670-0016fdbdf60a.jpg?w=800',
        ]
    }

    return (
        <div className={classes.ProductInfo}>
            <div className={classes.ProductInfo__Head}>
                <div className={classes.HeadImage}>
                    <img src={product.listProducts[0].image} alt={product.listProducts[0].color}
                    style={{
                        width: '100%'
                    }}/>
                </div>
                <div className={classes.HeadInfo}>
                    <div>
                        <div className={classes.HeadInfo__Price}>
                            <h4>{product.name}</h4>
                            <h5>đ {product.price}</h5>
                            <ul>
                                {
                                    product.size.map((s, i) => (
                                        <li key={i} >
                                            <div>
                                            {product.listProducts[0].id}
                                            </div>
                                            <div >
                                            {product.listProducts[0].color}, {s}
                                            </div>
                                            <div>
                                            33 CH còn	
                                            </div>
                                            <div>
                                                <button>Buy</button>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>
                        <div className={classes.HeadInfo__Descreption}>
                            <h4>Descreption</h4>
                            Chất liệu: Cotton
                            <br />
                            Thành phần: 95%cotton 5%spandex
                            <br />
                             - Co dãn 4 chiều nên tạo được sự thoải mái khi mặc
                            <br />
                             - Vải thấm hút mồ hôi tốt, thoáng khí
                        </div>
                    </div>
                    <div>
                        {
                            product.listProducts.map((p, i) => (
                                <div key={i}>
                                    <img src={p.image} alt={p.color}/>
                                </div>
                            ))
                        }  
                    </div>
                </div>
            </div>
            <div>
                {product.posters.map((e, i) => (
                    <img key={i} src={e} alt={i}/>
                ))}
            </div>
        </div>
    )
}

export default ProductInfo;