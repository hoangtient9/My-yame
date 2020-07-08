import React, {useState, useEffect, useCallback} from 'react';
import {CSSTransition} from 'react-transition-group'

import classes from './Carousel.module.scss';

const Carousel = props => {
    const [index, setIndex] = useState(0);
    const [firstRun, setFirstRun] = useState(true)

    const goNext = useCallback(() => {
        setIndex(props.slides.length - 1 === index ? 0 : index + 1)
        setFirstRun(false)
    }, [index, props.slides])

    useEffect(() => {
        setTimeout(goNext, 3000)
        return () => {
            clearTimeout(goNext)
        }
    }, [goNext])

    if(props.slides.length === 0){
        return null
    }

    // if(props.slides.length === 1){
    //     return (
    //         <div className={classes.Carousel}>
    //             <div className={[classes.Slide, classes.enterActive].join(' ')}>
    //                 <img src={props.slides[0].link} alt={props.slides[0].title}/>
    //             </div> 
    //         </div>
    //     )
    // }

    return (
        <div className={classes.Carousel}>
            {props.slides.map((slide, i) => (
                // <CSSTransition
                //     key={i}
                //     in={i === index}
                //     timeout={3000}
                //     mountOnEnter
                //     unmountOnExit
                //     classNames={{
                //         enter: i === 0 ? classes.enterActive : '',
                //         enterActive: i === 0 ? '' : classes.enterActive,
                //         exit: '',
                //         exitActive: classes.exitActive
                // }
                // }>{state => (
                //     <div className={classes.Slide}>
                //         <img src={slide.link} alt={slide.title}/>
                //     </div> 
                // )}
                // </CSSTransition>
                    <div className={
                        i === index ? !firstRun ? [classes.Slide, classes.enterActive, classes.firstRun].join(' ') : [classes.Slide, classes.enterActive].join(' ') :
                        index === 0 && i === props.slides.length - 1 ? [classes.Slide, classes.exitActive, classes.firstRun].join(' ') :
                        i === index -1 ? [classes.Slide, classes.exitActive, classes.firstRun].join(' ') : [classes.Slide, classes.enter].join(' ')

                    }>
                      <img src={slide.link} alt={slide.title}/>
                    </div> 
            ))}
        </div>
    )
}

export default Carousel
