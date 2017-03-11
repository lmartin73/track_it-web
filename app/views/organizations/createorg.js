import React, { Component } from 'react';
import { Link, Location } from 'react-router';

import '../../../public/vendor/staps/jquery.steps.min.js'
import '../../../public/vendor/validate/jquery.validate.min.js'
import '../../../public/styles/plugins/steps/jquery.steps.css'
import '../../../public/vendor/chosen/chosen.jquery.js'
import '../../../public/styles/plugins/chosen/bootstrap-chosen.css'
import '../../../public/vendor/select2/select2.full.min.js'
import '../../../public/styles/plugins/select2/select2.min.css'
import countries from '../../src/countries';

var phone_types = ["home", "iPhone", "mobile", "work", "home fax", "work fax", "other"]
var address_types = ["home", "work", "other"]

class CreateOrg extends Component {

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
                // Suppress (skip) "Warning" step if the user is old enough.
                if (currentIndex === 2 && Number($("#age").val()) >= 18) {
                    $(this).steps("next");
                }

                if (currentIndex == 0) {
                    $(".actions a:eq(0)").text("Previous");
                    $(".actions a:eq(1)").text("Next");
                } else if (currentIndex === 1) {
                    $(".actions a:eq(1)").text("Create Organization");
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

        $('.chosen-select').chosen({
            width: "100%",
            "disable_search": true
        });

        $(".select2_demo_1").select2();
        $(".select2_demo_2").select2();
        $(".select2_demo_3").select2();
    }

    render() {
        return(
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
                                            <h5>Create an Organization</h5>
                                        </div>
                                        <div className="ibox-content">
                                            <br/>
                                            <form id="form" ref="form" action="#" className="wizard-big">
                                                <h1>Infomation</h1>
                                                <fieldset>
                                                    {this.informationSection()}
                                                </fieldset>
                                                <h1>Verify</h1>
                                                <fieldset>
                                                    {this.verificationSection()}
                                                </fieldset>
                                                <h1>Finish</h1>
                                                <fieldset>
                                                    {this.finishSection()}
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

    informationSection() {
        return(
            <div>
                <div className="text-center">
                    <p>Enter the information below, and press next.</p><br/>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="text-center">
                            <div style={{marginTop: 20}}>
                                <img alt="image" id="profileImage" style={{objectFit: 'cover'}} className="img-circle img-lg" src="img/organization_icon.png"/><br/>
                                <label className="btn btn-link">Select Photo
                                    <input type="file" id="profileImageInput" style={{display: 'none'}} />
                                </label><br/><br/>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-8">
                        <div className="form-group">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <br/><input id="name" name="name" type="text" className="form-control required" placeholder="Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <br/><div className="input-group">
                                            <input id="phone" name="phone" type="text" className="form-control required" placeholder="Phone Number" />
                                            <div className="input-group-btn">
                                                <select id="phoneType" className="form-control required chosen-select">
                                                    {this.typeSelection(phone_types)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <br/><div className="row">
                                    <div className="col-md-12">
                                        <div className="input-group">
                                            <input id="street1" name="street1" type="text" className="form-control required" placeholder="Street Address" />
                                            <div className="input-group-btn">
                                                <select id="addressType" className="form-control required chosen-select">
                                                    {this.typeSelection(address_types)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <br/><input id="street2" name="street2" type="text" className="form-control" placeholder="Apt/Suite #" />
                                    </div>
                                    <div className="col-md-3">
                                        <br/><input id="city" name="city" type="text" className="form-control required" placeholder="City" />
                                    </div>
                                    <div className="col-md-3">
                                        <br/><input id="state" name="state" type="text" placeholder="State" className="form-control required" />
                                    </div>
                                    <div className="col-md-3">
                                        <br/><input id="zip" name="zip" type="text" className="form-control required" placeholder="Zip" />
                                    </div>
                                    <div className="col-md-3">
                                        <br/><select id="country" name="country" data-placeholder="Country" className="form-control required">
                                            {this.countrySelection()}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    verificationSection() {
        return(
            <div className="text-center">
                <div>
                    <p>Please check the details below for correction.</p><br/>
                    <h1 align="center" className="text-center">Organization Name</h1>
                    <h4>ID: T34SQ12L</h4>
                </div>
                <div style={{marginTop: 20}}>
                    <img alt="image" className="img-rounded img-lg" src="img/organization_icon.png"/>
                </div>
                <br/><h4>City, State</h4>
                <p>Phone number</p><br/><br/>
                <small>Press next to create this organization.</small>
            </div>
        )
    }

    finishSection() {
        this.createOrganizationAction();
        return(
            <div className="text-center">
                <div>
                    <h1 align="center" className="text-center">Organization successfully created!</h1><br/><br/>
                </div>
                <p>Your organization information is now be available in the organizations list.</p><br/><br/><br/>
                <Link to="/home/listorg" className="btn btn-link text-info btn-md">Click to go to Organizations</Link>
            </div>
        )
    }

    countrySelection() {
        return countries.map(function(country) {
            return(
                <option key={country.code} value={country.name}>{country.name}</option>
            )
        });
    }

    typeSelection(array) {
        return array.map(function(type) {
            return(
                <option key={type} value={type}>{type}</option>
            )
        });
    }

    createOrganizationAction() {
        // Set up organization here
    }
}

export default CreateOrg