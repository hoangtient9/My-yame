import React, { useState, useRef, useEffect, useLayoutEffect} from 'react';

import {useLocation, useParams} from 'react-router-dom'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import classes from './Layout.module.scss';

const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const myref = useRef(null) 
    const { pathname } = useLocation();
    const params = useParams();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname, params])
    // let windowOffset = 0;

    const sideDrawerCloseHandler = () => {
        setShowSideDrawer(false)
        // const topSrc = myref.current.style.top;
        // myref.current.scrollTo(0, parseInt(topSrc || '0') * -1)
        document.body.style.overflow = ''
        // document.body.className = ''
      }
    
    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(prevState => !prevState)
        // windowOffset = window.scrollY;
        document.body.style.overflow = 'hidden'
        // document.body.className = classes.Hidden;
    }

    
    return (
        <div ref={myref} className={showSideDrawer ? [classes.Layout, classes.Hidden].join(' ') : classes.Layout} >
            <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} />
            <Toolbar sideDrawerToggleClicked={sideDrawerToggleHandler} />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;