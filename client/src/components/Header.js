import React, {Component} from "react";
import Background from '../assets/img/lock.jpg';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg bg-primary navbar-transparent navbar-absolute"
                     color-on-scroll="500">
                    <div className="container">
                        <div className="navbar-wrapper">
                            <a className="navbar-brand" href="#pablo">Material Dashboard Pro</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navigation" aria-controls="navigation-index" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a  className="nav-link">
                                        <i className="material-icons">dashboard</i> Home
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link">
                                        <i className="material-icons">person_add</i> <Link to='/home/register' style={{ color: '#FFF' }} >Register</Link>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link">
                                        <i className="material-icons">fingerprint</i> <Link to='/home/login' style={{ color: '#FFF' }} >Login</Link>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>



            </React.Fragment>
        );
    }
}

export default Header;