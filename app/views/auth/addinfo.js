import React, { Component } from 'react';
import { Link, Location, Router } from 'react-router';
import currentUser from '../../src/staticDefs'

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

class AddInfo extends Component {

    componentDidMount() {
        var self = this;
        $("#form").steps({
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
                var form = $(this);

                self.saveInfoAction();
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

        $('input[type=file]').change(function (e) {
            var reader = new FileReader();
            reader.onload = function (e) {
                self.setState({profileImageSrc: e.target.result});
            };
            reader.readAsDataURL(e.target.files[0]);
            console.log(self.state);
        });
    }

    constructor() {
        super();
        this.state = {
            firstname: "Jordan",
            lastname: "Hubbard",
            email: "jhubb95@yahoo.com",
            profileImageSrc: "img/profile_big.jpg"
        };
        console.log(this.state);
    }

    render() {
        return (
            <div className="animated fadeInDown">
                <div className="text-center">
                    <div>
                        <h1 align="center" className="logo-name text-center">TI+</h1>
                    </div>
                    <h2>Account created successfully!</h2><br/>
                    <h3>Let's set up your account...</h3><br/>
                </div>
                <div className="wrapper wrapper-content">
                    <div className="row">
                        <div className="col-lg-10 col-lg-offset-1">
                            <div className="ibox">
                                <div className="ibox-title">
                                    <h5>Complete the Form</h5>
                                </div>
                                <div className="ibox-content">
                                    <br/>
                                    <form id="form" ref="form" action="#" className="wizard-big">
                                        <h1>Personal</h1>
                                        <fieldset>
                                            <p>Add your profile picture and personal information to continue...</p>
                                            {this.personalField()}
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
        )
    }

    personalField() {
        return(
            <div className="row">
                <div className="col-lg-4">
                    <div className="text-center">
                        <div style={{marginTop: 20}}>
                            <img alt="image" id="profileImage" style={{objectFit: 'cover'}} className="img-circle img-lg" src={this.state.profileImageSrc}/><br/>
                            <label className="btn btn-link">Select Photo
                                <input type="file" id="profileImageInput" style={{display: 'none'}} />
                            </label><br/><br/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <input id="firstname" name="firstname" type="text" defaultValue={this.state.firstname} className="form-control required" placeholder="First Name" onBlur={this.infoChangedAction.bind(this)} /><br/>
                                </div>
                                <div className="col-md-12">
                                    <input id="lastname" name="lastname" type="text" defaultValue={this.state.lastname} className="form-control required" placeholder="Last Name" onChange={this.infoChangedAction.bind(this)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="form-group">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <br/><input id="email" name="email" type="text" defaultValue={this.state.email} className="form-control" placeholder="Email" disabled />
                                </div>
                                <div className="col-md-6">
                                    <br/><div className="input-group">
                                        <input id="phone" name="phone" type="text" className="form-control required" placeholder="Phone Number" onChange={this.infoChangedAction.bind(this)} />
                                        <div className="input-group-btn">
                                            <select id="phoneType" className="form-control required chosen-select" onChange={this.infoChangedAction.bind(this)}>
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
                                        <input id="street1" name="street1" type="text" className="form-control required" placeholder="Street Address" onChange={this.infoChangedAction.bind(this)} />
                                        <div className="input-group-btn">
                                            <select id="addressType" className="form-control required chosen-select" onChange={this.infoChangedAction.bind(this)}>
                                                {this.typeSelection(address_types)}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {this.textInputField("street2", "col-md-12", "Apt/Suite #")}
                                {this.textInputField("city", "col-md-3", "City")}
                                {this.textInputField("state", "col-md-3", "State")}
                                {this.textInputField("zip", "col-md-3", "Zip")}
                                <div className="col-md-3">
                                    <br/><select id="country" name="country" data-placeholder="Country" className="form-control required" onChange={this.infoChangedAction.bind(this)}>
                                        {this.countrySelection()}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    textInputField(id, column, placeholder) {
        return(
            <div className={column}>
                <br/><input id={id} name={id} type="text" className="form-control" placeholder={placeholder} onChange={this.infoChangedAction.bind(this)} />
            </div>
        )
    }

    finishField() {
        return(
            <div className="text-center">
                <div>
                    <h1 align="center" className="text-center">Congratulations, Jordan Hubbard!</h1>
                </div>
                <div style={{marginTop: 20}}>
                    <img alt="image" className="img-circle img-lg" src="img/profile_big.jpg"/>
                </div>
                <br/><h4>You have successfully set up your account and organizations!</h4><br/>
                <p>Click Finish to go to dashboard.</p>
            </div>
        )
    }

    infoChangedAction(e) {
        switch(e.target.id) {
            case "firstname":
                this.setState({firstname: e.target.value});
                break;
            case "lastname":
                this.setState({lastname: e.target.value});
                break;
            case "phone":
                this.setState({phone: e.target.value});
                break;
            case "phonetype":
                this.setState({phonetype: e.target.value});
                break;
            case "street1":
                this.setState({street1: e.target.value});
                break;
            case "street2":
                this.setState({street2: e.target.value});
                break;
            case "city":
                this.setState({city: e.target.value});
                break;
            case "state":
                this.setState({state: e.target.value});
                break;
            case "zip":
                this.setState({zip: e.target.value});
                break;
            case "country":
                this.setState({country: e.target.value});
                break;
            case "addresstype":
                this.setState({addresstype: e.target.value});
                break;
        }
        console.log(this.state);
    }

    saveInfoAction() {
        // Method to save information (updated info can be pulled from this.state)
        // Transition to profile component for now
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
}

export default AddInfo