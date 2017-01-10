import React from 'react';
import {hashHistory} from 'react-router';
import data from './data';
import CompProduct from './product';
import PDP from './pdp';

export default React.createClass({
    getInitialState: function() {
        return {
            header: ''
        }
    },
    render: function() {
        return (
            <div id="main">
                <header onClick={this.homeFunction}>
                    <h5>Little Pharmaceuticals</h5>
                    <h6>Ask your doctor about</h6>
                    <h1 ref="hero">{this.state.header}</h1>
                    <h6>coming soon</h6>
                </header>
                {this.props.children}
            </div>
        );
    },
    componentWillMount: function() {

    },
    componentDidMount: function() {
        var randPharma = data.prefixArr[Math.floor(Math.random()*data.prefixArr.length)] + data.middleArr[Math.floor(Math.random()*data.middleArr.length)] + data.suffixArr[Math.floor(Math.random()*data.suffixArr.length)];
        this.setState({header: randPharma});
        console.log(this.props.location.pathname);
        if(this.props.location.pathname === '/') {
            this.homeFunction();
        }
    },
    homeFunction: function() {
        hashHistory.push('/categories');
    }
});