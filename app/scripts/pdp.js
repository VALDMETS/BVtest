import React from 'react';
import {Link, hashHistory} from 'react-router';
import _ from 'underscore';
import data from './data';

export default React.createClass({
    getInitialState: function() {
        return {
            drug: _.findWhere(data.drugList, {name: this.props.params.id}),
        }
    },
    render: function() {
        console.log(this.state.drug.id);
        $BV.configure('global', { productId : this.state.drug.id });
        $BV.ui( 'rr', 'show_reviews', {doShowContent : function () {console.log('workin');} });
        let drug = this.props.params.id;
        let descriptionBlock = this.state.drug.description.map( (blurb, i) => {
            return <p className="description-block" key={i}>{blurb}</p>
        });
        let itemList = _.map(data.drugList, (drug, i) => {
            let url = '/main/' + drug.name;
            return <Link to={url} key={i}>{drug.name}</Link>
        })
        return (
            <div className="pdp">
                <div className="top-menu">
                    {itemList}
                </div>
                <div className="product-info">
                    <h1>{this.state.drug.name}</h1>
                    <div id="BVRRSummaryContainer"></div>
                    <h5>{this.state.drug.scientific}</h5>
                    {descriptionBlock}
                    <p className="side-effects">Side effects may include: {this.state.drug.sideEffects}</p>
                </div>
                <div id="BVRRContainer"></div>      
            </div>
        )
    },
    componentWillMount: function() {
        let info = _.findWhere(data.drugList, {name: this.props.params.id});
        this.setState({drug: info, productId: info});
    },
    componentWillReceiveProps: function(nextProps) {
        if(this.props.params.id !== nextProps.params.id) {
            this.setState({drug: _.findWhere(data.drugList, {name: nextProps.params.id})})
        }
    }
});