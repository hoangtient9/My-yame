import React, {useState, useEffect, useCallback} from 'react';

import classes from './Carousel.module.scss';

const Carousel = props => {
    const [index, setIndex] = useState(0);
    const [firstRun, setFirstRun] = useState(true)

    const goNext = useCallback(() => {
        if (props.slides.length > 1) {
            setIndex(props.slides.length - 1 === index ? 0 : index + 1)
            setFirstRun(false)
        }
        
    }, [index, props.slides])

    useEffect(() => {
        setTimeout(goNext, 3000);
        return () => {
            clearTimeout(goNext)
        }
    }, [goNext])

    if(props.slides.length === 0){
        return null
    }

    return (
        <div className={classes.Carousel}>
            {props.slides.map((slide, i) => (
                <div key={i} className={
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
