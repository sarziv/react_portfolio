import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import './About.css';
import Fab from '@material-ui/core/Fab';
import Frameworks from './about-pages/Frameworks';
import FrontEnd from './about-pages/Front-end';
import BackEnd from './about-pages/Back-end';
import Extra from './about-pages/extra';
import Welcome from './about-pages/Welcome';
const pages = [
    ({ style }) => <animated.div style={{ ...style, background: 'lightcyan' }}><Welcome/></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightseagreen' }}><Frameworks/></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}><FrontEnd/></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}><BackEnd/></animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightyellow' }}><Extra/></animated.div>,

];

function About() {
    const [index, set] = useState(0);
    const onClick = useCallback(() => set(state => (state + 1) % 5), []);
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });
    return (
        <div className="simple-trans-main" onClick={onClick}>
            <span className='nextArrow'><span className="nextClick">Click</span></span>
            <span className="click">
                <Fab color="secondary" aria-label="Edit" className="counter" >
            {index+1}/5
                </Fab>
            </span>
            {transitions.map(({ item, props, key }) => {
                const Page = pages[item];
                return <Page key={key} style={props} />
            })}
        </div>
    )
}
export default About;