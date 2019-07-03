import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import Fab from '@material-ui/core/Fab';
import './About.css';

const pages = [
    ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>
        <div>Frameworks
            <div className="smallerText">

            </div>
        </div>
                </animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
];

function About() {
    const [index, set] = useState(0);
    const onClick = useCallback(() => set(state => (state + 1) % 3), []);
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });
    return (
        <div className="simple-trans-main" onClick={onClick}>
            <span className="click"> Slides:{index+1}/3</span>
            {transitions.map(({ item, props, key }) => {
                const Page = pages[item];
                return <Page key={key} style={props} />
            })}
        </div>
    )
}
export default About;