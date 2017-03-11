import React, { Component } from 'react';
import { Link, Location } from 'react-router';


class EditProfile extends Component {

    render() {
        document.body.style.backgroundColor = "#2f4050";

        var firstname = "Jordan";
                var lastname = "Hubbard";
                var email = "jhubb95@yahoo.com";
                var phone_info = {
                    number: "6014544734",
                    type: "mobile"
                };
                var address_info = {
                    street1: "151 Yucca Dr.",
                    street2: "",
                    city: "Jackson",
                    state: "MS",
                    zip: "39211",
                    country: "United States",
                    type: "home"
                };

        function store_information() {
            console.log(document.getElementById('first_name').value);
            console.log(document.getElementById('last_name').value);
            console.log(document.getElementById('email').value);
            console.log(document.getElementById('phone').value);
            console.log(document.getElementById('addr_street1').value);
            console.log(document.getElementById('addr_street2').value);
            console.log(document.getElementById('addr_city').value);
            console.log(document.getElementById('addr_state').value);
            console.log(document.getElementById('addr_zip').value);
            console.log(document.getElementById('addr_country').value);
        }

        return (
            <div>
                <div id="page-wrapper" className="gray-bg">

                    <div className="row wrapper border-bottom white-bg page-heading">
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
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Name</label>
                                                <div className="form-group col-lg-10 col-sm-10">
                                                    <input type="text" id="first_name" defaultValue={firstname} placeholder="First" className="form-control"/>
                                                </div>
                                                <label className="col-sm-2 control-label"></label>
                                                <div className="form-group col-lg-10 col-sm-10">
                                                    <input type="text" id="last_name" defaultValue={lastname} placeholder="Last" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="hr-line-dashed"></div>
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Email</label>
                                                <div className="form-group col-lg-10 col-sm-10">
                                                    <input type="text" id="email" defaultValue={email} placeholder="Email" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="hr-line-dashed"></div>
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Phone</label>
                                                <div className="form-group col-lg-10 col-sm-10">
                                                    <input type="text" id="phone" defaultValue={phone_info.number} placeholder="Phone" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="hr-line-dashed"></div>
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Address</label>
                                                <div className="form-group col-lg-10 col-sm-10">
                                                    <input type="text" id="addr_street1" defaultValue={address_info.street1} className="form-control" placeholder="Street 1" required=""/>
                                                </div>
                                                <label className="col-sm-2 control-label"></label>
                                                <div className="form-group col-lg-10 col-sm-10">
                                                    <input type="text" id="addr_street2" defaultValue={address_info.street2} className="form-control" placeholder="Street 2" required=""/>
                                                </div>
                                                <label className="col-sm-2 control-label"></label>
                                                <div className="form-group col-lg-10 col-sm-10">
                                                    <input type="text" id="addr_city" defaultValue={address_info.city} className="form-control" placeholder="City" required=""/>
                                                </div>
                                                <label className="col-sm-2 control-label"></label>
                                                <div className="form-group col-lg-10 col-sm-10">
                                                    <input type="text" id="addr_state" defaultValue={address_info.state} className="form-control" placeholder="State" required=""/>
                                                </div>
                                                <label className="col-sm-2 control-label"></label>
                                                <div className="form-group col-lg-10 8col-sm-10">
                                                    <input type="text" id="addr_zip" defaultValue={address_info.zip} className="form-control" placeholder="Zip" required=""/>
                                                </div>
                                                <label className="col-sm-2 control-label"></label>
                                                <div className="form-group col-lg-10 col-sm-10">
                                                    <input type="text" id="addr_country" defaultValue={address_info.country} className="form-control" placeholder="Country" required=""/>
                                                </div>
                                            </div>
                                            <div className="hr-line-dashed"></div>
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label"></label>
                                                <Link to="/profile" className="btn btn-white">Cancel</Link>&nbsp;
                                                <Link to="/profile" className="btn btn-primary" type="submit" onClick={store_information}>Save changes</Link>
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
}

export default EditProfile