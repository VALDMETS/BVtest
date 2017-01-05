import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import data from './data';

// console.log('wow weeee');

// var pharma = data.prefixArr[Math.floor(Math.random()*data.prefixArr.length)] + data.middleArr[Math.floor(Math.random()*data.middleArr.length)] + data.suffixArr[Math.floor(Math.random()*data.suffixArr.length)]
// var $deal = document.getElementById('hero');
// $deal.innerText = pharma;
// console.log(data.prefixArr[(data.prefixArr.length)-1] + data.middleArr[3]);
// console.log(data.prefixArr.length);
// console.log(pharma);

const compMain = React.createClass({
    getInitialState: function() {
        return {
            header: ''
        }
    },
    render: function() {
        return (
            <header>
                <h1 ref="hero">{this.state.header}</h1>
            </header>
        );
    },
    componentDidMount: function() {
        console.log(this.refs.hero.innerText);
        this.setState({header: 'blahblah'});

    }
});
var router = (
    <Router history={hashHistory}>
        <Route path="/*" component={compMain}/>
    </Router>
);

ReactDOM.render(router, document.getElementById('container'));
