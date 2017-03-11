/**
 * Created by luthermartin-pers on 1/2/17.
 */
import React, { Component } from 'react';
import { Link, Location, browserHistory } from 'react-router';
import TiUserAccount from "./../../src/TIAuth/TiUserAccount"

import "../../../public/styles/plugins/sweetalert/sweetalert.css"
import "../../../public/vendor/plugins/sweetalert/sweetalert.min.js"

class ForgotPassword extends Component {

    forgotPassword(event){
        event.preventDefault();
        var userAccount = new TiUserAccount
        userAccount.sendPasswordResetEmail(this.refs.email.value, (error)=>{
            if(error != null){
                //show error prompt
                swal({
                    title: error.code,
                    text: error.message,
                    type: "error"
                });
            }else{
                swal({
                    title: "Forgot Password",
                    text: "A reset password link has been sent to your email."
                },function () {
                    browserHistory.push("/auth")
                });

            }

        })
        console.log("here")



    }
    render(){
        return (
            <div className="passwordBox animated fadeInDown">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ibox-content">
                            <h2 className="font-bold">Forgot password</h2>

                            <p>
                                Enter your email address and a reset password link will be sent.
                            </p>

                            <div className="row">
                                <div className="col-lg-12">
                                    <form className="m-t" role="form" onSubmit={this.forgotPassword.bind(this)} >
                                        <div className="form-group">
                                            <input type="email" className="form-control" ref="email" placeholder="Email address" required=""/>
                                        </div>

                                        <button type="submit" className="btn btn-primary block full-width m-b">Send new password</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <p className="m-t"><small>MH Software Solutions &copy; 2017</small></p>
            </div>
        )


    }
}

export default ForgotPassword