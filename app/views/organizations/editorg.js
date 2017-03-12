import React, { Component } from 'react';
import { Link, Location } from 'react-router';

import '../../../public/vendor/chosen/chosen.jquery.js'
import '../../../public/styles/plugins/chosen/bootstrap-chosen.css'
import '../../../public/styles/plugins/select2/select2.min.css'
import countries from '../../src/countries';

var phone_types = ["home", "iPhone", "mobile", "work", "home fax", "work fax", "other"]
var address_types = ["home", "work", "other"]

class EditOrg extends Component {

    componentDidMount() {
        var self = this;
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
                self.setState({orgLogoSrc: e.target.result});
            };
            reader.readAsDataURL(e.target.files[0]);
            console.log(self.state);
        });
    }

    constructor() {
        super();
        this.state = {
            orgLogoSrc: "/img/organization_icon.png",
            name: "Hubbard",
            phone: "6014544734",
            phonetype: "mobile",
            street1: "151 Yucca Dr.",
            street2: "",
            city: "Jackson",
            state: "MS",
            zip: "39211",
            country: "United States",
            addresstype: "home"
        };
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <div id="wrapper" className="gray-bg">
                    <div className="row border-bottom white-bg page-heading">
                        <div className="col-lg-10">
                            <h2>Edit Profile</h2>
                            <ol className="breadcrumb">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a>Forms</a>
                                </li>
                                <li className="active">
                                    <strong>Edit Profile</strong>
                                </li>
                            </ol>
                        </div>
                        <div className="col-lg-2">
                        </div>
                    </div>
                    <div className="wrapper wrapper-content animated fadeInRight">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <h5>Edit Information</h5>
                                    </div>
                                    <div className="ibox-content">
                                        <form method="get" className="form-horizontal">
                                            {this.nameLogoSection.bind(this)}
                                            {this.phoneSection.bind(this)}
                                            {this.locationSection.bind(this)}
                                            <div className="form-group">
                                                <div className="col-sm-10 col-sm-offset-1">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <Link to="/home/profile" className="btn btn-white">Cancel</Link>&nbsp;
                                                            <Link to="/home/profile" className="btn btn-primary" type="submit" onClick={this.saveChangesAction.bind(this)}>Save changes</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    nameLogoSection() {
        return(
            <div>
                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-1">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <div style={{marginTop: 20}}>
                                        <img alt="image" id="logo" style={{objectFit: 'cover'}} className="img-circle img-lg" src={this.state.orgLogoSrc}/><br/>
                                        <label className="btn btn-link">Select Photo
                                            <input type="file" id="logoInput" style={{display: 'none'}} />
                                        </label><br/><br/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <br/><input id="name" name="name" type="text" defaultValue={this.state.name} className="form-control required" placeholder="Name" onChange={this.infoChangedAction.bind(this)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
            </div>
        )
    }

    phoneSection() {
        return(
            <div>
                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-1">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <input id="phone" name="phone" type="text" className="form-control required" defaultValue={this.state.phone} placeholder="Phone Number" onChange={this.infoChangedAction.bind(this)} />
                                    <div className="input-group-btn">
                                        <select id="phonetype" className="form-control required chosen-select" defaultValue={this.state.phonetype} onChange={this.infoChangedAction.bind(this)}>
                                            {this.typeSelection(phone_types)}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
            </div>
        )
    }

    locationSection() {
        return(
            <div>
                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-1">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <input id="street1" name="street1" type="text" className="form-control required" defaultValue={this.state.street1} placeholder="Street Address" onChange={this.infoChangedAction.bind(this)} />
                                    <div className="input-group-btn">
                                        <select id="addresstype" className="form-control required chosen-select" defaultValue={this.state.addresstype} onChange={this.infoChangedAction.bind(this)}>
                                            {this.typeSelection(address_types)}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-1">
                        <div className="row">
                            <div className="col-md-12">
                                <input id="street2" name="street2" type="text" className="form-control" defaultValue={this.state.street2} placeholder="Apt/Suite #" onChange={this.infoChangedAction.bind(this)} /><br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-1">
                        <div className="row">
                            <div className="col-md-3">
                                <input id="city" name="city" type="text" className="form-control required" defaultValue={this.state.city} placeholder="City" onChange={this.infoChangedAction.bind(this)}/><br/>
                            </div>
                            <div className="col-md-3">
                                <input id="state" name="state" type="text" placeholder="State" className="form-control required" defaultValue={this.state.state} onChange={this.infoChangedAction.bind(this)} />
                            </div>
                            <div className="col-md-3">
                                <input id="zip" name="zip" type="text" className="form-control required" defaultValue={this.state.zip} placeholder="Zip" onChange={this.infoChangedAction.bind(this)} /><br/>
                            </div>
                            <div className="col-md-3">
                                <select id="country" name="country" data-placeholder="Country" className="form-control required" defaultValue={this.state.country} onChange={this.infoChangedAction.bind(this)}>
                                    {this.countrySelection()}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
            </div>
        )
    }

    saveChangesAction() {
        // Save changes here
        // Load organization list page
    }

    infoChangedAction(e) {
        // When textfield changes have been made
        switch(e.target.id) {
            case "name":
                this.setState({name: e.target.value});
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

export default EditOrg