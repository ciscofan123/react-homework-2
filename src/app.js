import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import PageStartScreen from "./page.blocks/startscreen/startscreen";
import { createBrowserHistory } from 'history';
import './app.scss';

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact render={(props) => (
                    <PageStartScreen />
                )} />
            </Switch>
        </Router>
    );
}

export default App;