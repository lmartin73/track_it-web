import React, { Component } from 'react';
import { Link, Location } from 'react-router';
import {currentUserAccount, currentUserInfo} from '../../src/staticDefs'
console.log(currentUserInfo)

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
        document.body.style.backgroundColor = "#2f4050";

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
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <h5>Organizations</h5>
                                        <div className="ibox-tools">
                                            <button type="button" className="btn btn-link btn-xs text-info">Create</button>
                                            <button type="button" className="btn btn-link btn-xs text-info">Join</button>
                                        </div>
                                    </div>
                                    <div className="ibox-content">
                                        <div className="feed-activity-list">
                                            <div className="feed-element">
                                                <a href="#" className="pull-left">
                                                    <img alt="image" className="img-circle" src="/img/profile.jpg"/>
                                                </a>
                                                <div className="media-body">
                                                    <button type="button" className="btn btn-link btn-xs pull-right">
                                                        <small>details</small>
                                                    </button>
                                                    <strong>Hillsong Church, Org.</strong><br/>
                                                    <small>Organization ID</small>
                                                </div>
                                            </div>
                                            <div className="feed-element">
                                                <a href="#" className="pull-left">
                                                    <img alt="image" className="img-circle" src="/img/profile.jpg"/>
                                                </a>
                                                <div className="media-body ">
                                                    <button type="button" className="btn btn-link btn-xs pull-right">
                                                        <small>details</small>
                                                    </button>
                                                    <strong>Hillsong Church, Org.</strong><br/>
                                                    <small>Organization ID</small>
                                                </div>
                                            </div>
                                            <div className="feed-element">
                                                <a href="#" className="pull-left">
                                                    <img alt="image" className="img-circle" src="/img/profile.jpg"/>
                                                </a>
                                                <div className="media-body ">
                                                    <button type="button" className="btn btn-link btn-xs pull-right">
                                                        <small>details</small>
                                                    </button>
                                                    <strong>Hillsong Church, Org.</strong><br/>
                                                    <small className="text-muted">Organization ID</small>
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

export default Profile