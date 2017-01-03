/**
 * Created by luthermartin-pers on 1/2/17.
 */
import React, { Component } from 'react';
import { Link, Location } from 'react-router';

class ForgotPassword extends Component {

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
                                    <form className="m-t" role="form" action="#">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email address" required=""/>
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