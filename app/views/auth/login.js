/**
 * Created by luthermartin-pers on 1/2/17.
 */
import React, { Component } from 'react';
import { Link, Location, browserHistory } from 'react-router';
import {currentUserAccount, currentUserInfo} from '../../src/staticDefs'
import "../../../public/styles/plugins/sweetalert/sweetalert.css"
import "../../../public/vendor/plugins/sweetalert/sweetalert.min.js"

class Login extends Component {

    login(event){
        event.preventDefault();

        currentUserAccount.loginAccountWithCompletion(this.refs.email.value,this.refs.password.value,(user, error)=>{
            if(error == null){
                // The user was successfully authenticated.

                console.log(this.props)
                browserHistory.push("/home")

            }else{
                // There was an error authenticating the user
                swal({
                    title: error.code,
                    text: error.message,
                    type: "error"
                });

            }
        });

    }
    render() {
        return (
            <div className="middle-box text-center loginscreen animated fadeInDown">
                <div>
                    <div>
                        <h1 align="center" className="logo-name text-center">TI+</h1>
                    </div>
                    <h3> Welcome to TrackIt</h3>
                    <p>Manage and track all of your inventory within your company from the cloud.</p>
                    <p>Login to get started.</p>
                    <form className="m-t" role="form" onSubmit={this.login.bind(this)}>
                        <div className="form-group">
                            <input type="email" ref="email" className="form-control" placeholder="Email" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" ref="password" className="form-control" placeholder="Password" required=""/>
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b" >Login</button>

                        <Link to="/auth/forgotpassword"><small>Forgot Password</small></Link>
                        <p className="text-muted text-center"><small>Do not have an account?</small></p>
                        <Link to="/auth/signup"><p className="btn btn-sm btn-white btn-block">Create an account</p></Link>

                    </form>

                    <p className="m-t"><small>MH Software Solutions &copy; 2017</small></p>


                </div>
            </div>
        )
    }

}


export default Login