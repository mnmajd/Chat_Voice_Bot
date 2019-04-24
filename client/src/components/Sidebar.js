import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                {/*<div>*/}
                {/*<div className="wrapper">*/}
                <div className="sidebar" data-color="rose" data-background-color="black"
                     data-image={require('../assets/img/sidebar-1.jpg')}>
                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text logo-">
                            SFM
                        </a>
                        <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                            Telecom
                        </a>
                    </div>
                    <div className="sidebar-wrapper">
                        <div className="user">
                            <div className="photo">
                                <img src={require('../assets/img/faces/avatar.jpg')}/>
                            </div>
                            <div className="user-info">
                                <a data-toggle="collapse" href="#collapseExample" className="username">
                                          <span>
                                            Tania Andrew
                                            <b className="caret"></b>
                                          </span>
                                </a>
                                <div className="collapse" id="collapseExample">
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <span className="sidebar-mini"> MP </span>
                                                <span className="sidebar-normal"> My Profile </span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <span className="sidebar-mini"> EP </span>
                                                <span className="sidebar-normal"> Edit Profile </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ul className="nav">
                            <li className="nav-item active ">
                                <a className="nav-link" >
                                    <Link to='/admin/dash' style={{ color: '#FFF' }}>
                                    <i className="material-icons">dashboard</i>
                                    <p> Dashboard </p>
                                    </Link>

                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" data-toggle="collapse" href="#pagesExamples">
                                    <i className="material-icons">image</i>
                                    <p> Services
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="pagesExamples">
                                    <ul className="nav">
                                        <li className="nav-item ">
                                            <a className="nav-link" href="">
                                                <span className="sidebar-mini"> AS </span>
                                                <Link to='/admin/services' style={{ color: '#FFF' }} >
                                                    <span className="sidebar-normal">All Services</span>
                                                </Link>
                                            </a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link" href="./pages/user.html">
                                                <span className="sidebar-mini"> AS </span>
                                                <span className="sidebar-normal"> Add Services  </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>


                            <li className="nav-item ">
                                <a className="nav-link" data-toggle="collapse" href="#">
                                    <i className="material-icons">image</i>
                                    <Link to='/admin/claims' style={{ color: '#FFF' }} >
                                    <p> Claims</p>
                                    </Link>
                                </a>
                            </li>

                            <li className="nav-item ">
                                <a className="nav-link" data-toggle="collapse" href="#">
                                    <i className="material-icons">image</i>
                                    <Link to='/admin/after' style={{ color: '#FFF' }} >
                                        <p> After Sales</p>
                                    </Link>
                                </a>
                            </li>

                            <li className="nav-item ">
                                <a className="nav-link" data-toggle="collapse" href="#sav">
                                    <i className="material-icons">image</i>
                                    <p> Sav
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="sav">
                                    <ul className="nav">
                                        <li className="nav-item ">
                                            <a className="nav-link" href="">
                                                <span className="sidebar-mini"> 11111 </span>
                                                <Link to='/admin/services' style={{ color: '#FFF' }} >
                                                    <span className="sidebar-normal">All 1111</span>
                                                </Link>
                                            </a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link" href="./pages/user.html">
                                                <span className="sidebar-mini"> 222 </span>
                                                <span className="sidebar-normal"> Add 222  </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>




                        </ul>
                    </div>
                </div>
                {/*</div>*/}
                {/*</div>*/}
            </React.Fragment>
        );
    }
}

export default Sidebar;