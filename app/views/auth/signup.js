/**
 * Created by luthermartin-pers on 1/2/17.
 */
import React, { Component } from 'react';
import { Link, Location, browserHistory } from 'react-router';
import {currentUserAccount} from '../../src/staticDefs'

import "../../../public/vendor/plugins/validate/jquery.validate.min.js"

class SignUp extends Component {

    signUp(event){
        event.preventDefault();

        if($("#form").valid()){
            currentUserAccount.createUserAccountWithCompletion(this.refs.email.value,
                                                        this.refs.password.value,this.refs.firstName.value,
                                                        this.refs.lastName.value, (user, error)=>{
                if(error == null){
                    // The user was successfully authenticated.
                    browserHistory.push("/user")
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




    }

    componentDidMount(){
        $("#form").validate({
            errorPlacement: function (error, element)
            {
                element.after(error);
            },
            rules: {
                verifyPassword: {
                    equalTo: "#password"
                },
                firstName: {
                    required: true
                },
                lastName: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }

            }
        })
    }


    render() {
        return (
            <div className="middle-box text-center loginscreen animated fadeInDown">
                <div>
                    <div>
                        <h1 className="logo-name">TI+</h1>
                    </div>

                    <h3>Register to TrackIt</h3>
                    <p>Create an account to get started.</p>
                    <form id="form" className="m-t" role="form" onSubmit={this.signUp.bind(this)}>
                        <div className="form-group">
                            <input type="text" ref="firstName" name="firstName" id="firstName"className="form-control" placeholder="First Name" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="text" ref="lastName" name="lastName"  id="lastName" className="form-control" placeholder="Last Name" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="email" ref="email" name="email" id="email" className="form-control" placeholder="Email" required=""/>
                        </div>

                        <div className="form-group">
                            <input type="password" ref="password" name="password" id="password" className="form-control" placeholder="Password" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" ref="verifyPassword" name="verifyPassword" id="verifyPassword" className="form-control" placeholder="Verify Password" required=""/>
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Create Account</button>

                        <p className="test-muted text-center"><small>Already have an account?</small></p>
                        <Link to="/auth"><p className="btn btn-sm btn-white btn-block">Login</p></Link>

                    </form>

                    <p className="m-t"><small>MH Software Solutions &copy; 2017</small></p>


                </div>
            </div>
        )
    }

}


export default SignUp

