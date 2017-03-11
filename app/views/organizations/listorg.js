import React, { Component } from 'react';
import { Link, Location } from 'react-router';

import '../../../public/vendor/jquery-2.1.1.js'
import '../../../public/vendor/bootstrap.min.js'
import '../../../public/vendor/metisMenu/jquery.metisMenu.js'
import '../../../public/vendor/slimscroll/jquery.slimscroll.min.js'
import '../../../public/vendor/footable/footable.all.min.js'

var org = {
    name: "Org Name",
    imageSrc: "img/profile_big.jpg",
    id: "ID_number",
    owner: "Jordan Hubbard"
}
var orgList = [org, org, org, org, org]

class ListOrg extends Component {

    componentDidMount() {
        $('.footable').footable();
        $('.footable2').footable();
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
                                    {this.organizationSection()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    organizationSection() {
        return(
            <div className="ibox-content">
                <input type="text" className="form-control input-sm m-b-xs" id="filter" placeholder="Search Organizations" />
                <table className="footable table table-hover" data-page-size={8} data-filter="#filter">
                    <thead>
                        <tr>
                            <th>Logo</th>
                            <th>Name</th>
                            <th data-hide="phone">ID</th>
                            <th data-hide="phone">Created By:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.organizationList()}
                    </tbody>
                </table>
            </div>
        )
    }

    organizationList() {
        return orgList.map(function(organization) {
            return (
                <tr>
                    <td><img alt="image" className="img-circle img-md" src={organization.imageSrc}/></td>
                    <td><h5><Link>{organization.name}</Link></h5></td>
                    <td><h5>{organization.id}</h5></td>
                    <td><h5>{organization.owner}</h5></td>
                    <td className="project-actions">
                        <button type="button" className="btn btn-link btn-xs text-info" onClick={() => this.detailedView(organization.id)}>Details</button>
                        <button type="button" className="btn btn-link btn-xs text-danger" onClick={() => this.removeOrganizationAction(organization.id)}>Remove</button>
                    </td>
                </tr>
            )
        });
    }

    detailedView(id) {
        // show detailed page of selected organization here
    }

    removeOrganizationAction(id) {
        // remove organization here
    }
}

export default ListOrg