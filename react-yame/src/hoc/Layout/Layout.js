import React, { useState, useRef} from 'react';


import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import classes from './Layout.module.scss';


const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const myref = useRef(null) 
    let windowOffset = 0;

    const sideDrawerCloseHandler = () => {
        setShowSideDrawer(false)
        // const scrollY = document.body.style.top;
        const topSrc = myref.current.style.top;
        // document.body.setAttribute('style', '');
        // window.scrollTo(0, parseInt(scrollY || '0') * -1)
        myref.current.scrollTo(0, parseInt(topSrc || '0') * -1)
      }
    
    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(prevState => !prevState)
        windowOffset = window.scrollY;
        // document.body.setAttribute('style', `position: fixed; top: -${windowOffset}px; lef: 0;`) 
    }
    
    return (
        <div ref={myref} className={showSideDrawer ? [classes.Layout, classes.LayoutHidden].join(' ') : classes.Layout} style={{
            top: showSideDrawer ? `-${windowOffset}px`: '',
        }}>
            <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler}/>
            <Toolbar sideDrawerToggleClicked={sideDrawerToggleHandler} />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;