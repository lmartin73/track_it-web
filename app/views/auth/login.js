/**
 * Created by luthermartin-pers on 1/2/17.
 */
import React, { Component } from 'react';
import { Link, Location } from 'react-router';



class Login extends Component {

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
                    <form className="m-t" role="form" action="#">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Username" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required=""/>
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b" >Login</button>

                        <Link to="/forgotpassword"><small>Forgot Password</small></Link>
                        <p className="text-muted text-center"><small>Do not have an account?</small></p>
                        <Link to="/signup"><p className="btn btn-sm btn-white btn-block">Create an account</p></Link>

                    </form>

                    <p className="m-t"><small>MH Software Solutions &copy; 2017</small></p>


                </div>
            </div>
        )
    }

}


export default Login