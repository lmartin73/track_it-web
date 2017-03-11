import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { smoothlyMenu } from '../layouts/Helpers';
import {currentUserAccount} from '../../src/staticDefs.js'
import { Link, Location, browserHistory } from 'react-router';

class TopHeader extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

    signOutUser(e){
        e.preventDefault();
        currentUserAccount.signOutUser((error)=>{
            if(error == null){
                browserHistory.push("/auth");
            }
        })
    }

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top gray-bg" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " onClick={this.toggleNavigation} href="#"><i className="fa fa-bars"></i> </a>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <a href="#" onClick={this.signOutUser.bind(this)}>
                                <i className="fa fa-sign-out"></i> Log out
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default TopHeader