import React, {Component} from "react";
import Background from '../assets/img/lock.jpg';
import {Link} from "react-router-dom";
import {history} from "../helpers";
import { logout } from '../store/actions/LoginActions';
import { connect } from 'react-redux';

class Header extends Component {
    logout = event =>{
        const { dispatch } = this.props;
        dispatch(logout())

    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg bg-primary navbar-transparent navbar-absolute"
                     color-on-scroll="500">
                    <div className="container">
                        <div className="navbar-wrapper">
                            <a className="navbar-brand" href="#pablo">SFM Telecom</a>
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
                                        <i className="material-icons">dashboard</i>
                                        <Link to='/home' style={{ color: '#FFF' }} >Home</Link>
                                    </a>
                                </li>
                                {!this.props.loggedIn ?  <li className="nav-item ">
                                    <a className="nav-link">
                                        <i className="material-icons">person_add</i> <Link to='/home/register' style={{ color: '#FFF' }} >Register</Link>
                                    </a>
                                </li> : ''}

                                {this.props.loggedIn ?  <a className="nav-link">
                                    <i className="material-icons">fingerprint</i> <Link to='/home' onClick={(event) => {
                                    this.logout()
                                }} style={{ color: '#FFF' }} >Logout</Link>
                                </a> : <li className="nav-item ">
                                    <a className="nav-link">
                                        <i className="material-icons">fingerprint</i> <Link to='/home/login' style={{ color: '#FFF' }} >Login</Link>
                                    </a>
                                </li>}

                                {this.props.loggedIn ?  <li className="nav-item ">
                                    <a className="nav-link">
                                        <i className="material-icons">person</i> <Link to='/home/profile' style={{ color: '#FFF' }} >Profile</Link>
                                    </a>
                                </li> :'' }


                                {this.props.loggedIn ?
                                    <li className="nav-item ">
                                        <a className="nav-link">
                                            <i className="material-icons">person</i> <Link to='/home/aboutme' style={{ color: '#FFF' }} >AboutMe</Link>
                                        </a>
                                    </li>:'' }
                                {this.props.loggedIn ?
                                    <li className="nav-item ">
                                        <a className="nav-link">
                                            <i className="material-icons">person</i> <Link to='/home/map' style={{ color: '#FFF' }} >Map</Link>
                                        </a>
                                    </li>:'' }

                            </ul>
                        </div>
                    </div>
                </nav>



            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>{
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}
export default connect(
    mapStateToProps,
    null
)(Header);