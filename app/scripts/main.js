import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import router from './router';

// window.location.href = "/main/categories";

hashHistory.push('/main/categories');

ReactDOM.render(router, document.getElementById('container'));