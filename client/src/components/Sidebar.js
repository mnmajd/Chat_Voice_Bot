import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Background from "../assets/img/sidebar-1.jpg";

class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="sidebar" data-color="rose" data-background-color="black"
                     data-image={require('../assets/img/sidebar-1.jpg')}>

                    {/*<div className="sidebar header-filter" data-color="rose" data-background-color="black" style={{*/}
                    {/*backgroundImage: `url(${Background})`,*/}
                    {/*}}>*/}

                    {/*<div className="sidebar header-filter" data-color="rose" data-background-color="black"*/}
                    {/*style={{backgroundImage: `url(${Background})`}}>*/}
                    <div className="logo">
                        <a href="" className="simple-text logo-mini">

                        </a>
                        <a href="" className="simple-text logo-normal">
                            SFM Telecom
                        </a>

                    </div>
                    <div className="sidebar-wrapper">

                        <ul className="nav">
                            <li className="nav-item active ">
                                <a className="nav-link" >
                                    <Link to='/admin' style={{ color: '#FFF' }}>
                                        <i className="material-icons">dashboard</i>
                                        <p> Dashboard </p>
                                    </Link>

                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" data-toggle="collapse" href="#pagesExamples">
                                    <i className="material-icons">shopping_cart</i>
                                    <p> Services
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="pagesExamples">
                                    <ul className="nav">
                                        <li className="nav-item ">
                                            <a className="nav-link" href="">
                                                <Link to='/admin/services/table' style={{ color: '#FFF' }} >
                                                    <span className="sidebar-mini"> AS </span>
                                                    <span className="sidebar-normal">All Services</span>
                                                </Link>
                                            </a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link" href="./pages/user.html">
                                                <Link to='/admin/services/add' style={{ color: '#FFF' }} >
                                                    <span className="sidebar-mini"> AS </span>
                                                    <span className="sidebar-normal"> Add Services  </span>
                                                </Link>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" data-toggle="collapse" href="#offers">
                                    <i className="material-icons">local_offer</i>
                                    <p> Offers <b className="caret"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="offers">
                                    <ul className="nav">
                                        <li className="nav-item ">
                                            <a className="nav-link" href="">
                                                <Link to='/admin/offers/table' style={{ color: '#FFF' }} >
                                                    <span className="sidebar-mini"> AO </span>
                                                    <span className="sidebar-normal">All Offers</span>
                                                </Link>
                                            </a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link" href="">
                                                <Link to='/admin/offers/add' style={{ color: '#FFF' }} >
                                                    <span className="sidebar-mini"> AO </span>
                                                    <span className="sidebar-normal"> Add Offer  </span>
                                                </Link>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" data-toggle="collapse" href="#afterSales">
                                    <i className="material-icons">contact_support</i>
                                    <p> AfterSales <b className="caret"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="afterSales">
                                    <ul className="nav">
                                        <li className="nav-item ">
                                            <a className="nav-link" href="">
                                                <Link to='/admin/aftersales/table' style={{ color: '#FFF' }} >
                                                    <span className="sidebar-mini"> AO </span>
                                                    <span className="sidebar-normal">All AfterServices</span>
                                                </Link>
                                            </a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link" href="">
                                                <Link to='/admin/aftersales/add' style={{ color: '#FFF' }} >
                                                    <span className="sidebar-mini"> AO </span>
                                                    <span className="sidebar-normal"> Add AfterSales  </span>
                                                </Link>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item ">
                                <a className="nav-link" data-toggle="collapse" href="#">
                                    <i className="material-icons">warning</i>
                                    <Link to='/admin/claims/table' style={{ color: '#FFF' }} >
                                        <p> Claims</p>
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" data-toggle="collapse" href="#">
                                    <i className="material-icons">history</i>
                                    <Link to='/admin/history' style={{ color: '#FFF' }} >
                                        <p> Conversation History</p>
                                    </Link>
                                </a>
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