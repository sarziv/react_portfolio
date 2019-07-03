import React from "react";
import {Route, Switch} from "react-router-dom";
import Welcome from '../components/welcome/Welcome';
function Routing() {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Welcome}/>
            </Switch>
        </main>
    );
}

export default Routing;