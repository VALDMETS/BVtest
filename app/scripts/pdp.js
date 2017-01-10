import React from 'react';
import {Link, hashHistory} from 'react-router';
import _ from 'underscore';
import data from './data';

export default React.createClass({
    getInitialState: function() {
        return {
            // drug: _.findWhere(data.drugList, {name: this.props.params.id}),
            drug: {}
        }
    },
    render: function() {
        $BV.configure('global', { productId : this.state.drug.id });
        $BV.ui( 'rr', 'show_reviews', {doShowContent : function () {console.log('workin');} });
        let drug = this.props.params.id;
        let descriptionBlock = this.state.drug.description.map( (blurb, i) => {
            return <p className="description-block" key={i}>{blurb}</p>
        });
        let itemList = _.map(data.drugList, (drug, i) => {
            let url = '/' + drug.name;
            return <Link to={url} key={i}>{drug.name}</Link>
        });
        return (
            <div className="pdp" itemScope itemType="http://schema.org/Product">
                <div className="top-menu">
                    {itemList}
                </div>
                <div className="product-info">
                    <h1 itemProp="name">{this.state.drug.name}</h1>
                    <div id="BVRRSummaryContainer"></div>
                    <h5>{this.state.drug.scientific}</h5>
                    {descriptionBlock}
                    <p className="side-effects">Side effects may include: {this.state.drug.sideEffects}</p>
                    <form onSubmit={() => {this.firePixel(this.state.drug)}} className="finder" action="https://www.google.com/#safe=off&q=doctors+in+my+area" target="_blank">
                        <input type="submit" value="Find a doctor near me"/>
                    </form>
                </div>
                <div id="BVRRContainer"></div>      
            </div>
        )
    },
    componentWillMount: function() {
        let info = _.findWhere(data.drugList, {name: this.props.params.id});
        if (info === undefined) {
            hashHistory.push('/missing');
        } else {
            this.setState({drug: info, productId: info});
        }
    },
    componentWillReceiveProps: function(nextProps) {
        if(this.props.params.id !== nextProps.params.id) {
            this.setState({drug: _.findWhere(data.drugList, {name: nextProps.params.id})})
        }
    },
    firePixel: function(drug) {
        $BV.SI.trackConversion({
            "type"  : "Interest",
            "label" : "ProductPage",
            "value" : drug.name,
            "sku"   : drug.id
        });
    }
});