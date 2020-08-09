import React from 'react';

import classes from './Poster.module.scss';

const Poster = props => {

    return (
        <div className={classes.Poster}>
            {props.data.map((poster, i) => (
                <div key={i} className={classes.PosterItem}>
                    <div>
                        <h4>{poster.addData.title}</h4>
                    </div>
                    <div>
                        <img src={poster.addData.image} alt="anh loi" loading='lazy'/>
                    </div>
                    <div className={classes.ListImage}>
                        {poster.addData.listImage.split(';').map((a, ind) => (
                            <div key={ind}>
                                <img src={a} alt='anh loi' loading='lazy'/>
                            </div>
                        ))}
                    </div>
                </div>
            ))} 
        </div>
    )
}

export default Poster;