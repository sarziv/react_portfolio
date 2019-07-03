import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from '../components/welcome/Welcome';
import About from '../components/about/About';
import Project from '../components/projects/Project';
function Routing() {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Home} exec/>
                <Route path="/about" exact component={About} exec/>
                <Route path="/projects" exact component={Project} exec/>
                <Route path="/resume" exact component={Home} exec/>
            </Switch>
        </main>
    );
}

export default Routing;