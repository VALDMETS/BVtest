import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, Router, browserHistory} from 'react-router';
import data from './data';
import MainPage from './mainpage';
import PDP from './pdp';

const router = (
    <Router history={browserHistory}>
        <Route path="/main" component={MainPage}>
            <Route path="/main/:id" component={PDP}/>
        </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById('container'));
browserHistory.push('/main');

