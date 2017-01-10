import React from 'react';
import {hashHistory} from 'react-router';
import _ from 'underscore';
import data from './data';

export default React.createClass({
    render: function() {
        let currentDrug = _.findWhere(data.drugList, {name: this.props.drug.name});
        let currentImage = {background: `url(${currentDrug.imageUrl})`};
        let inlineId = 'BVRRInlineRating-' + currentDrug.id;
        return (
            <div className="summaryButton" onClick={this.clickFunction} style={currentImage}>
                <span className="drug-name">{this.props.drug.name}</span>
                <div className="pharma-inline" id={inlineId}></div>
            </div>
        )
    },
    clickFunction: function() {
        hashHistory.push('/' + this.props.drug.name);
    }
})