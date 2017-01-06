import React from 'react';
import {hashHistory} from 'react-router';
import _ from 'underscore';
import data from './data';

export default React.createClass({
    render: function() {
        let currentDrug = _.findWhere(data.drugList, {name: this.props.drug.name});
        let currentImage = {background: `url(${currentDrug.imageUrl})`};
        return (
            <div className="summaryButton" onClick={this.clickFunction} style={currentImage}>
                <span>{this.props.drug.name}</span>
            </div>
        )
    },
    clickFunction: function() {
        hashHistory.push('/main/' + this.props.drug.name);
    }
})