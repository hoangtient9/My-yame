import React from 'react';
import classes from './Logo.module.scss';
import logoImage from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const logo = () => (
  <div className={classes.Logo}>
    <Link to='/' exact='true'>
      <img src={logoImage} alt='Yame.vn'/>
    </Link>
  </div>
)

export default logo;