import React from 'react';
import classes from './Logo.module.scss';
import logoImage from '../../assets/images/logo.png';

const logo = () => (
  <div className={classes.Logo}>
    <img src={logoImage} alt='Yame.vn'/>
  </div>
)

export default logo;