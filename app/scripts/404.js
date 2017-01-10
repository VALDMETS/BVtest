import React from 'react';
import {Link, hashHistory} from 'react-router';

export default React.createClass({
    render: function() {
        return (
            <div className="404">
              <h3>Oops! This isn't a page.</h3>
             <Link to='/categories'>Click here to return.</Link>
            </div>
        )
    }
});