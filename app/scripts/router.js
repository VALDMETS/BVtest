import React from 'react';
import {Link, Route, Router, browserHistory} from 'react-router';
import MainPage from './mainpage';
import Category from './category';
import PDP from './pdp';

const router = (
    <Router history={browserHistory}>
        <Route path="/main" component={MainPage}>
            <Route path="/main/categories" component={Category}/>
            <Route path="/main/:id" component={PDP}/>
        </Route>
    </Router>
);

export default router;