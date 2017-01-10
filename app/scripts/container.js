import React from 'react';
import $ from 'jquery';

export default React.createClass({
    componentWillMount: function () {
        $('head').append('<link rel="canonical" href="http://lilpharma.surge.sh/#/container.htm"/>');
        $('head').append('<meta name="robots" content="noindex, nofollow">');
        $BV.container('global', {});
    },
    render: function() {
        return null;
    }
});