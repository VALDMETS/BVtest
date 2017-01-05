import React from 'react';
import {browserHistory} from 'react-router';
import data from './data';

export default React.createClass({
    render: function() {
        return (
            <div onClick={this.clickFunction}>
                <span>{this.props.drug.name}</span>
            </div>
        )
    },
    clickFunction: function() {
        browserHistory.push('/main/' + this.props.drug.name);
    }
})