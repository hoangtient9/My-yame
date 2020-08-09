import React, { useState } from 'react';
import classes from './ProductDetail.module.scss';

const ProductDetail = props => {
    const [indexState, setIndexState] = useState(0);
    
    return (
        <div className={classes.ProductInfo}>
            <div className={classes.ProductInfo__Head}>
                <div className={classes.HeadImage}>
                    <img src={props.data.image.split(';')[indexState]} alt={props.data.colors.split(';')[indexState]}
                    style={{
                        width: '100%'
                    }}/>
                </div>
                <div className={classes.HeadInfo}>
                    <div>
                        <div className={classes.HeadInfo__Price}>
                            <h4>{props.data.name}</h4>
                            <h5>đ {(props.data.price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</h5>
                            <ul>
                                {
                                    props.data.size.split(';').map((s, i) => (
                                        <li key={i} >
                                            <div>
                                                <p>
                                                    {props.data.id}
                                                </p>
                                            </div>
                                            <div >
                                            {props.data.colors.split(';')[indexState]}, {s}
                                            </div>
                                            <div>
                                                <button 
                                                    onClick={() => props.clicked({
                                                        id: props.data.id,
                                                        color: props.data.colors.split(';')[indexState],
                                                        size: s,
                                                        image: props.data.image.split(';')[indexState],
                                                        price: props.data.price,
                                                        name: props.data.name,
                                                        amount: 1,
                                                })}
                                                >Buy</button>
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
                            Thành phần: 95% cotton, 5% spandex
                            <br />
                             - Co dãn 4 chiều nên tạo được sự thoải mái khi mặc
                            <br />
                             - Vải thấm hút mồ hôi tốt, thoáng khí
                        </div>
                    </div>
                    <div>
                        {
                            props.data.image.split(';').map((p, i) => (
                                <div key={i} onClick={() => setIndexState(i)}>
                                    <img src={p} alt={'anh loi'}/>
                                </div>
                            ))
                        }  
                    </div>
                </div>
            </div>
            <div>
                {props.data.listImage.split(';').map((e, i) => (
                    <img key={i} src={e} alt={'anh loi'} />
                ))}
            </div>
        </div>
    )
}

export default ProductDetail;