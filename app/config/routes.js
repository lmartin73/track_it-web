import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import MinorView from '../views/Minor';
import LoginView from '../views/auth/login'
import SignUpView from '../views/auth/signup'
import AddPersonalInformationView from '../views/auth/add_personal_info.js'
import ForgotPasswordView from '../views/auth/forgotpassword'
import ProfileView from '../views/profile/profile.js'
import EditProfileView from '../views/profile/editprofile.js'



import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Blank}>
            <IndexRedirect to="auth" />

            //Authentication routes
            <Route path="auth" component={Blank}>
                <IndexRedirect to="login" />
                <Route path="login" component={LoginView}> </Route>
                <Route path="signup" component={SignUpView}> </Route>
                <Route path="forgotpassword" component={ForgotPasswordView}> </Route>
            </Route>

            <Route path="user" component={Main}>
                <IndexRedirect to="profile" />
                <Route path="add_personal_information" component={AddPersonalInformationView}> </Route>
                <Route path="profile" component={ProfileView}> </Route>
                <Route path="editprofile" component={EditProfileView}> </Route>
            </Route>


        </Route>
    </Router>
);
