import React from 'react';
import {browserHistory} from 'react-router';
import _ from 'underscore';
import data from './data';
import CompProduct from './product';

export default React.createClass({
    render: function() {
        let idList = _.map(data.drugList, (drug, i) => {
            return drug.id
        });
        let itemList = _.map(data.drugList, (drug, i) => {
            return <CompProduct key={i} drug={drug}/>
        });
        $BV.ui( 'rr', 'inline_ratings', {
            productIds : idList,
            containerPrefix: 'BVRRInlineRating'
        });
        return (
            <div id="categories">
                {itemList}
            </div>
        );
    },
});