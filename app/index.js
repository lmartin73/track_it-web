import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';
import * as firebase from 'firebase'
import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/font-awesome/css/font-awesome.css'
import './../node_modules/animate.css/animate.min.css'
import './../public/styles/style.css'

//form wizard style sheets
//import './../node_modules/steps/jquery.steps.css'
//import './../public/styles/plugins/iCheck/custom.css'

//import './node_modules/plugins/staps/jquery.steps.min'



ReactDOM.render(
<Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
);

