/**
 * Created by luthermartin-pers on 1/2/17.
 */
import React, { Component } from 'react';
import { Link, Location } from 'react-router';
import currentUser from '../../src/staticDefs'

class SignUp extends Component {

    signUp(event){
        event.preventDefault();

        currentUser.createUserAccountWithCompletion(this.refs.email.value,this.refs.password.value,(user, error)=>{
            if(error == null){
                // The user was successfully authenticated.
                console.log(user)
                this.props.history.push("/signup")
            }else{
                // There was an error authenticating the user
                console.log(error)
            }
        });

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

                    <form className="m-t" role="form" action="#" onSubmit={this.signUp.bind(this)}>
                        <div className="form-group">
                            <input type="text" ref="firstName" className="form-control" placeholder="First Name" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="text" ref="lastName" className="form-control" placeholder="Last Name" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="email" ref="email" className="form-control" placeholder="Email" required=""/>
                        </div>

                        <div className="form-group">
                            <input type="password" ref="password" className="form-control" placeholder="Password" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" ref="verifyPassword" className="form-control" placeholder="Verify Password" required=""/>
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Create Account</button>

                        <p className="test-muted text-center"><small>Already have an account?</small></p>
                        <Link to="/main"><p className="btn btn-sm btn-white btn-block">Login</p></Link>

                    </form>

                    <p className="m-t"><small>MH Software Solutions &copy; 2017</small></p>


                </div>
            </div>
        )
    }

}


export default SignUp

