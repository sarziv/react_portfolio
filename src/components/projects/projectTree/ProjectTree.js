import React, { memo, useState } from 'react'
import { useSpring, a } from 'react-spring'
import { useMeasure, usePrevious } from './helper'
import { Global, Frame, Title, Content, toggle } from './styles'
import * as Icons from './icons'

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(defaultOpen)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
        <Frame>
            <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
            <Title style={style}>{name}</Title>
            <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <a.div style={{ transform }} {...bind} children={children} />
            </Content>
        </Frame>
    )
})

const ProjectTree = () => (
    <>
        <Global />
        <Tree name="Tree" defaultClosed>
            <Tree name="PHP" defaultOpen>
                <Tree name="Laravel" defaultOpen>
                    <a href="https://github.com/sarziv/salary_system_backend_laravel"><Tree name="Salary_system_v3_API"></Tree></a>
                    <a href="https://github.com/sarziv/salarysystem"><Tree name="Salary_system_v2_CRUD"></Tree></a>
                    <a href="https://github.com/sarziv/Portfolio_black"><Tree name="Portfolio_black"></Tree></a>
                    <a href="https://github.com/sarziv/LaravelBlog"><Tree name="LaravelBlog"></Tree></a>
                    <a href="https://github.com/sarziv/portf2"><Tree name="Portfolio_v2"></Tree></a>
                    <a href="https://github.com/sarziv/module"><Tree name="Laravel display Module"></Tree></a>
                    <a href="https://github.com/sarziv/coingate"><Tree name="CoinGate Crypto shop example"></Tree></a>
                </Tree>
                <Tree name="PHP_projects" defaultOpen>
                    <a href="https://github.com/sarziv/IT_Projektas"><Tree name="Ordering and execution system"></Tree></a>
                    <a href="https://github.com/sarziv/Php_findshop"><Tree name="PHP shop finder"></Tree></a>
                    <a href="https://github.com/sarziv/php_games"><Tree name="PHP Games"></Tree></a>
                    <a href="https://github.com/sarziv/Php_reformater"><Tree name="PHP formatter"></Tree></a>
                    <a href="https://github.com/sarziv/adventofcode2018"><Tree name="PHP Advent code"></Tree></a>
                    <a href="https://github.com/sarziv/hashtag_php"><Tree name="PHP infinite recursion"></Tree></a>
                </Tree>
            </Tree>
            <Tree name="React" defaultOpen>
                <a href="https://github.com/sarziv/salary_system_front_react"><Tree name="Salary_system_frontend_v3"></Tree></a>
                <a href="https://github.com/sarziv/react_portfolio"><Tree name="React portfolio"></Tree></a>
            </Tree>
            <Tree name="Java" defaultOpen>
                <a href="https://github.com/sarziv/sarziv.ws"><Tree name="Spring boot"></Tree></a>
            </Tree>
            <Tree name="Scripts" defaultOpen>
                <a href="https://github.com/sarziv/scripts/tree/master/Bash"><Tree name="BASH"></Tree></a>
            </Tree>
        </Tree>
    </>
)
export default ProjectTree;

