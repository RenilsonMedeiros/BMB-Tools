import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import login from './pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={login} />
            </Switch>
        </BrowserRouter>
    )
}