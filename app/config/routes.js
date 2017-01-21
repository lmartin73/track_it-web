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
import JoinOrganizationView from '../views/organizations/join_organization.js'
import NewOrganization from "../views/organization/neworg"


import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/neworg" />
            <Route path="main" component={LoginView}> </Route>
            <Route path="signup" component={SignUpView}> </Route>
            <Route path="add_personal_information" component={AddPersonalInformationView}> </Route>
            <Route path="forgotpassword" component={ForgotPasswordView}> </Route>
            <Route path="profile" component={ProfileView}> </Route>
            <Route path="editprofile" component={EditProfileView}> </Route>
            <Route path="join_organization" component={JoinOrganizationView}> </Route>
        </Route>
    </Router>
);
