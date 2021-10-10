import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import PageStartScreen from "./page.blocks/startscreen/startscreen";
import { createBrowserHistory } from 'history';
import './app.scss';
import Settings from "./page.blocks/settings/settings";
import History from "./page.blocks/history/history";

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact render={(props) => (
                    <PageStartScreen />
                )} />
                <Route path="/settings" exact render={(props) => (
                    <Settings />
                )} />
                <Route path="/history" exact render={(props) => (
                    <History />
                )} />
            </Switch>
        </Router>
    );
}

export default App;