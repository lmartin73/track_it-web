import React from 'react'
import Main from '../components/layouts/Main.js'
import Blank from '../components/layouts/Blank.js'

import MainView from '../views/Main.js'
import MinorView from '../views/Minor.js'
import LoginView from '../views/auth/login.js'
import SignUpView from '../views/auth/signup.js'
import AddInfoView from '../views/auth/addinfo.js'
import ForgotPasswordView from '../views/auth/forgotpassword.js'
import ProfileView from '../views/profile/profile.js'
import EditProfileView from '../views/profile/editprofile.js'


import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>

        <Route path="/" component={Blank}>
            <IndexRedirect to="auth" />
            <Route path="home" component={Main}>
                <IndexRedirect to="join_organization" />
                <Route path="profile" component={ProfileView}> </Route>
                <Route path="editprofile" component={EditProfileView}> </Route>
            </Route>
            <Route path="auth" component={Blank}>
                <IndexRedirect to="signup" />
                <Route path="forgotpassword" component={ForgotPasswordView}> </Route>
                <Route path="signup" component={SignUpView}> </Route>
                <Route path="addinfo" component={AddInfoView}> </Route>
                <Route path="main" component={LoginView}></Route>
            </Route>
        </Route>
    </Router>
);
