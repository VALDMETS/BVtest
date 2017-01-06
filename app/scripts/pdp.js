import React from 'react';
import {Link, browserHistory} from 'react-router';
import _ from 'underscore';
import data from './data';

export default React.createClass({
    getInitialState: function() {
        return {
            drug: _.findWhere(data.drugList, {name: this.props.params.id})
        }
    },
    render: function() {
        let drug = this.props.params.id;
        console.log(this.state.drug);
        let itemList = _.map(data.drugList, (drug, i) => {
            let url = '/main/' + drug.name;
            return <Link to={url} key={i}>{drug.name}</Link>
        })
        return (
            <div className="pdp">
                <div className="top-menu">
                    {itemList}
                </div>
                <div className={drug}>
                </div>
            </div>
        )
    },
    componentWillMount: function() {
        console.log(browserHistory);
        let info = _.findWhere(data.drugList, {name: this.props.params.id});
        this.setState({drug: info});
        console.log(this.props.params.id);
    },
    componentWillReceiveProps: function(nextProps) {
        if(this.props.params.id !== nextProps.params.id) {
            this.setState({drug: _.findWhere(data.drugList, {name: nextProps.params.id})})
        }
    }
});