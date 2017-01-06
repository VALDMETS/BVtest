import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import router from './router';

browserHistory.push('/main/categories');

ReactDOM.render(router, document.getElementById('container'));