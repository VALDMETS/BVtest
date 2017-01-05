import React from 'react';
import {browserHistory} from 'react-router';
import data from './data';
import CompProduct from './product';

export default React.createClass({
    getInitialState: function() {
        return {
            header: ''
        }
    },
    render: function() {
        console.log(browserHistory.getCurrentLocation().pathname);
        let itemList = data.drugList.map( (drug, i) => {
            return <CompProduct key={i} drug={drug}/>
        })
        return (
            <div id="main">
                <header>
                    <h1 ref="hero">{this.state.header}</h1>
                </header>
                {itemList}
            </div>
        );
    },
    componentDidMount: function() {
        var randPharma = data.prefixArr[Math.floor(Math.random()*data.prefixArr.length)] + data.middleArr[Math.floor(Math.random()*data.middleArr.length)] + data.suffixArr[Math.floor(Math.random()*data.suffixArr.length)];
        this.setState({header: randPharma});

    }
});