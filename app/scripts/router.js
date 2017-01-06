import React from 'react';
import {Link, Route, Router, hashHistory} from 'react-router';
import MainPage from './mainpage';
import Category from './category';
import PDP from './pdp';

const router = (
    <Router history={hashHistory}>
        <Route path="/main" component={MainPage}>
            <Route path="/main/categories" component={Category}/>
            <Route path="/main/:id" component={PDP}/>
        </Route>
    </Router>
);

export default router;