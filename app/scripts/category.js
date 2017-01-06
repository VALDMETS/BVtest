import React from 'react';
import {browserHistory} from 'react-router';
import _ from 'underscore';
import data from './data';
import CompProduct from './product';
import PDP from './pdp';

export default React.createClass({
    render: function() {
        let itemList = _.map(data.drugList, (drug, i) => {
            return <CompProduct key={i} drug={drug}/>
        });
        return (
            <div id="categories">
                {itemList}
            </div>
        );
    },
});