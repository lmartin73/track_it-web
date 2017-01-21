import React, { Component } from 'react';
import { Link, Location } from 'react-router';

class AddPersonalInfomation extends Component {
    render() {
        return (
            <div className="middle-box text-center loginscreen animated fadeInDown">
                <div>
                    <div>
                        <h1 align="center" className="logo-name text-center">TI+</h1>
                    </div>
                    <h2>Account created successfully!</h2><br/>
                    <h3>Next Steps....</h3><br/>
                    <p>Enter other profile information, or edit it later.</p>
                    <div className="hr-line-dashed"></div>
                    <form className="m-t" role="form" action="#">
                        <div className="form-group">
                            <img alt="image" className="img-circle img-lg img-picker" src="img/profile_big.jpg"/><br/>
                            <button type="button" className="btn btn-link btn-sm text-success">edit image</button>
                        </div>
                        <div className="hr-line-dashed"></div>
                        <p className="pull-left">Phone</p>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Number" required=""/>
                        </div>
                        <div className="hr-line-dashed"></div>
                        <p className="pull-left">Address</p>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Street 1" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Street 2" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="City" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="State" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Zip" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Country" required=""/>
                            </div>
                        <div className="hr-line-dashed"></div>
                        <div className="form-group pull-right">
                            <Link to="/profile" className="btn btn-white">Skip</Link>&nbsp;&nbsp;
                            <Link to="/profile" className="btn btn-primary" type="submit">Save information</Link>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default AddPersonalInfomation