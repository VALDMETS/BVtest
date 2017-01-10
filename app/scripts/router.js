import React from 'react';
import {Link, Route, Router, hashHistory} from 'react-router';
import MainPage from './mainpage';
import Category from './category';
import PDP from './pdp';
import Container from './container';
import Missing from './404';

const router = (
    <Router history={hashHistory}>
        <Route path="/container" component={Container}/>
        <Route path="/missing" component={Missing}/>
        <Route path="/" component={MainPage}>
            <Route path="/categories" component={Category}/>
            <Route path="/:id" component={PDP}/>
        </Route>
    </Router>
);

export default router;