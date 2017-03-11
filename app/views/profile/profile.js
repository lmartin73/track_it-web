import React, { Component } from 'react';
import { Link, Location } from 'react-router';
import {currentUserAccount, currentUserInfo} from '../../src/staticDefs'
console.log(currentUserInfo)

var org = {
    name: "Org Name",
    imageSrc: "img/profile_big.jpg",
    id: "ID_number"
}

var orgList = [org, org, org, org, org]

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            profileImageSrc: "img/profile_big.jpg",
            firstname: "Jordan",
            lastname: "Hubbard",
            email: "jhubb95@yahoo.com",
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
        this.street = this.state.street1 + " " + this.state.street2;
        this.city_state_zip = this.state.city + ", " + this.state.state + " " + this.state.zip;
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
                            <div className="col-md-5">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <h5>Profile</h5>
                                    </div>

                                    {this.profileContent()}
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <h5>Organizations</h5>
                                        <div className="ibox-tools">

                                            <Link to="/home/createorg" className="btn btn-link btn-xs text-info">Create</Link>
                                            <Link to="/home/joinorg" className="btn btn-link btn-xs text-info">Join&nbsp;&nbsp;</Link>
                                            <a className="collapse-link">
                                                <i className="fa fa-chevron-up" />
                                            </a>
                                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                                <i className="fa fa-wrench" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-user">
                                                <li><a href="#">Config option 1</a>
                                                </li>
                                                <li><a href="#">Config option 2</a>
                                                </li>
                                            </ul>
                                            <a className="close-link">
                                                <i className="fa fa-times" />
                                            </a>
                                        </div>
                                    </div>
                                    {this.organizationContent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    profileContent() {
        return (
            <div>
                <div className="ibox-content no-padding border-left-right">
                    <img alt="image" className="img-responsive" src={this.state.profileImageSrc}/>
                </div>
                <div className="ibox-content profile-content">
                    <h4><strong>{this.state.firstname + " " + this.state.lastname}</strong></h4>
                    <p>E:&nbsp;&nbsp;&nbsp;{this.state.email}</p>
                    <p><i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp; {this.street}
                                                           <small className="pull-right text-success">{this.state.addresstype}</small><br/>
                                                           &emsp;&nbsp;&nbsp;&nbsp;{this.city_state_zip}<br/>
                                                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.country}<br/></p>
                    <p>P:&nbsp;&nbsp;&nbsp;{this.state.phone}<small className="pull-right text-success">{this.state.phonetype}</small></p>
                    <div className="row m-t-lg">
                    </div>
                    <div className="user-button">
                        <div className="row">
                            <div className="col-md-6">
                                <Link to="/home/editprofile" className="btn btn-primary btn-sm btn-block">Edit information</Link>
                            </div>
                            <div className="col-md-6">
                                <button type="button" className="btn btn-default btn-sm btn-block"><i className="fa fa-envelope"></i>Send message</button>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }

    organizationContent() {
        return (
            <div className="ibox-content">
                <div className="feed-activity-list">
                    {this.organizationList()}
                </div>
            </div>
        )
    }

    organizationList() {
        return orgList.map(function(organization) {
            return(
                <div className="feed-element">
                    <a href="#" className="pull-left">
                        <img alt="image" className="img-circle" src={organization.imageSrc}/>
                    </a>
                    <div className="media-body ">
                        <button type="button" className="btn btn-link btn-xs pull-right">
                            <small>details</small>
                        </button>
                        <strong>{organization.name}</strong><br/>
                        <small className="text-muted">{organization.id}</small>
                    </div>
                </div>
            )
        });
    }
}

export default Profile