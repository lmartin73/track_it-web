import React, { Component } from 'react';
import { Link, Location } from 'react-router';

import '../../../public/vendor/staps/jquery.steps.min.js'
import '../../../public/vendor/validate/jquery.validate.min.js'
import '../../../public/styles/plugins/steps/jquery.steps.css'
import '../../../public/vendor/chosen/chosen.jquery.js'
import '../../../public/styles/plugins/chosen/bootstrap-chosen.css'
import '../../../public/vendor/select2/select2.full.min.js'
import '../../../public/styles/plugins/select2/select2.min.css'

class JoinOrg extends Component {

    componentDidMount() {
        $("#form").steps({
            enableFinishButton: false,
            bodyTag: "fieldset",
            onStepChanging: function (event, currentIndex, newIndex) {
                // Always allow going backward even if the current step contains invalid fields!
                if (currentIndex > newIndex) {
                    return true;
                }
                // Forbid suppressing "Warning" step if the user is to young
                if (newIndex === 3 && Number($("#age").val()) < 18) {
                    return false;
                }

                var form = $(this);

                // Clean up if user went backward before
                if (currentIndex < newIndex) {
                    // To remove error styles
                    $(".body:eq(" + newIndex + ") label.error", form).remove();
                    $(".body:eq(" + newIndex + ") .error", form).removeClass("error");
                }

                // Disable validation on fields that are disabled or hidden.
                form.validate().settings.ignore = ":disabled,:hidden";

                // Start validation; Prevent going forward if false
                return form.valid();
            },
            onStepChanged: function (event, currentIndex, priorIndex) {
                console.log(currentIndex);
                // Suppress (skip) "Warning" step if the user is old enough.
                if (currentIndex === 2 && Number($("#age").val()) >= 18) {
                    $(this).steps("next");
                }

                if (currentIndex == 0) {
                    $(".actions a:eq(0)").text("Previous");
                    $(".actions a:eq(1)").text("Next");
                } else if (currentIndex === 1) {
                    $(".actions a:eq(1)").text("Request Access");
                } else if (currentIndex === 2) {
                    $(".actions a:eq(0)").hide();
                    $(".actions a:eq(2)").hide();
                }

                // Suppress (skip) "Warning" step if the user is old enough and wants to the previous step.
                if (currentIndex === 2 && priorIndex === 3) {
                    $(this).steps("previous");
                }

            },
            onFinishing: function (event, currentIndex) {
                var form = $(this);

                // Disable validation on fields that are disabled.
                // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
                form.validate().settings.ignore = ":disabled";

                // Start validation; Prevent form submission if false
                return form.valid();
            },
            onFinished: function (event, currentIndex) {

            }
        }).validate({
            errorPlacement: function (error, element) {
                element.after(error);
            },
            rules: {
                confirm: {
                    equalTo: "#password"
                }
            }
        });
    }

    render() {
        return (
            <div>
                <div id="wrapper wrapper-content" className="gray-bg">
                    <div className="row wrapper border-bottom white-bg page-heading">
                        <div className="col-lg-10">
                            <h2>Profile</h2>
                            <ol className="breadcrumb">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a>Profile</a>
                                </li>
                                <li className="active">
                                    <strong>Basic Profile</strong>
                                </li>
                            </ol>
                        </div>
                        <div className="col-lg-2">
                        </div>
                    </div>
                    <div className="wrapper wrapper-content">
                        <div className="row animated fadeInRight">
                            <div className="col-md-12">
                                <div className="ibox float-e-margins">
                                    <div className="ibox">
                                        <div className="ibox-title">
                                            <h5>Join an Organization</h5>
                                        </div>
                                        <div className="ibox-content">
                                            <br/>
                                            <form id="form" ref="form" action="#" className="wizard-big">
                                                <h1>Search</h1>
                                                <fieldset>
                                                    {this.searchField()}
                                                </fieldset>
                                                <h1>Verify</h1>
                                                <fieldset>
                                                    {this.verificationField()}
                                                </fieldset>
                                                <h1>Finish</h1>
                                                <fieldset>
                                                    {this.finishField()}
                                                </fieldset>
                                            </form>
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

    searchField() {
        return(
            <div className="row">
                <div className="text-center">
                    <div style={{marginTop: 20}}>
                        <img alt="image" className="img-circle img-lg" src="/img/organization_icon.png"/>
                    </div>
                    <div>
                        <br/><br/><p>Enter the organization-id number you would like to join.</p><br/>
                    </div>
                </div>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                    <div className="form-group">
                        <input id="ID" name="ID" type="text" className="form-control required" placeholder="ID Number" />
                    </div>
                </div>
            </div>
        )
    }

    verificationField() {
        return(
            <div className="text-center">
                <div>
                    <h1 align="center" className="text-center">Organization Name</h1>
                </div>
                <div style={{marginTop: 20}}>
                    <img alt="image" className="img-rounded img-lg" src="/img/organization_icon.png"/>
                </div>
                <br/><h4>City, State</h4>
                <p>Number of Members</p><br/><br/>
                <small>Submit request.</small>
            </div>
        )
    }

    finishField() {
        this.joinOrganizationAction();
        return(
            <div className="text-center">
                <div>
                    <h1 align="center" className="text-center">Request has been sent!</h1><br/><br/>
                </div>
                <p>The owner of Organization Name has been notified of your request.</p><br/><br/><br/>
                <Link to="/home/listorg" className="btn btn-link text-info btn-md">Click to go to Organizations</Link>
            </div>
        )
    }

    joinOrganizationAction() {
        // join organization here
    }
}

export default JoinOrg