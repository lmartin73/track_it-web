import React, { Component } from 'react';
import { Link, Location } from 'react-router';

class JoinOrganization extends Component {
    render() {
        return (
            <div id="wrapper">
                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="col-lg-7">
                                        <div className="ibox float-e-margins">
                                            <div className="ibox-title">
                                                <h5>Basic Wizzard</h5>
                                                <div className="ibox-tools">
                                                    <a className="collapse-link">
                                                        <i className="fa fa-chevron-up"></i>
                                                    </a>
                                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                                        <i className="fa fa-wrench"></i>
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-user">
                                                        <li><a href="#">Config option 1</a>
                                                        </li>
                                                        <li><a href="#">Config option 2</a>
                                                        </li>
                                                    </ul>
                                                    <a className="close-link">
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ibox-content">
                                                <p>
                                                    This is basic example of Step
                                                </p>
                                                <div className="wizard">
                                                    <h1>First Step</h1>
                                                    <div className="step-content">
                                                        <div className="text-center m-t-md">
                                                        <h2>Hello in Step 1</h2>
                                                        <p>
                                                            This is the first content.
                                                        </p>
                                                        </div>
                                                    </div>

                                                    <h1>Second Step</h1>
                                                    <div className="step-content">
                                                        <div className="text-center m-t-md">
                                                            <h2>This is step 2</h2>
                                                            <p>
                                                                This content is diferent than the first one.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <h1>Third Step</h1>
                                                    <div className="step-content">
                                                        <div className="text-center m-t-md">
                                                            <h2>This is step 3</h2>
                                                            <p>
                                                                This is last content.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JoinOrganization