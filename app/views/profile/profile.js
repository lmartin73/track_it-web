import React, { Component } from 'react';
import { Link, Location } from 'react-router';
import {currentUserAccount, currentUserInfo} from '../../src/staticDefs'
console.log(currentUserInfo)
class Profile extends Component {

    compenentDidMount(){
        var firstname = "Jordan";
        var lastname = "Hubbard";
        var email = currentUserInfo.getEmail();
        var phone_info = currentUserInfo.getPhone();
        var address_info = currentUserInfo.getAddress();
        console.log(address_info);
        console.log(address_info);
        if(currentUserInfo.getAddress() != null){
            var street = address_info.street1 + " " + address_info.street2;
            var city_state_zip = address_info.city + ", " + address_info.state + " " + address_info.zip;
            var country = address_info.country;
        }

    }




    render() {
        document.body.style.backgroundColor = "#2f4050";



        return (
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
                                            <img alt="image" className="img-responsive" src="/img/profile_big.jpg"/>
                                        </div>
                                        <div className="ibox-content profile-content">
                                            <h4><strong>{currentUserInfo.getFirstName() + " " + currentUserInfo.getLastName() }</strong></h4>
                                            <p>E:&nbsp;&nbsp;&nbsp;{email}</p>
                                            if(currentUserInfo.getAddress()){
                                                <p><i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp; {address_info.street1}
                                               <small className="pull-right text-success">{address_info.type}</small><br/>
                                               &emsp;&nbsp;&nbsp;&nbsp;{city_state_zip}<br/>
                                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{country}<br/></p>

                                            }

                                            <p>P:&nbsp;&nbsp;&nbsp;{phone_info.number}<small className="pull-right text-success">{phone_info.type}</small></p>
                                            <div className="row m-t-lg">
                                            </div>
                                            <div className="user-button">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <Link to="/editprofile" className="btn btn-primary btn-sm btn-block">Edit information</Link>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <button type="button" className="btn btn-default btn-sm btn-block"><i className="fa fa-envelope"></i> Send message</button>
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