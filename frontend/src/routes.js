import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Borrows from './pages/Borrows';
import NewBorrow from './pages/NewBorrow';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/borrows" component={Borrows} />
                <Route path="/borrow/new" component={NewBorrow} />
            </Switch>
        </BrowserRouter>
    )
}