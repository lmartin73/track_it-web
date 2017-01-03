import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import MinorView from '../views/Minor';
import LoginView from '../views/auth/login'
import SignUpView from '../views/auth/signup'
import ForgotPasswordView from '../views/auth/forgotpassword'


import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Blank}>
            <IndexRedirect to="/main" />
            <Route path="main" component={LoginView}> </Route>
            <Route path="signup" component={SignUpView}> </Route>
            <Route path="forgotpassword" component={ForgotPasswordView}> </Route>
        </Route>

    </Router>

);