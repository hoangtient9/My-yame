import React from 'react';

import classes from './BigPoster.module.scss';

const BigPoster = props => {
    return (
        <div className={classes.BigPoster}>
            <img src={props.link} alt='bigPicture' />
        </div>
    )
}

export default BigPoster;