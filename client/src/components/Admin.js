import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import '../assets/css/material-dashboard.css'
import '../assets/img/apple-icon.png';
import '../assets/img/favicon.png';
import '../assets/assets-for-demo/demo.css';
import Sidebar from "./Sidebar";
import Services from "./Services";
import AfterSales from "./AfterSales";
import Claim from "./ClaimComponent/Claim";
import TableOfferAdmin from "./OfferComponent/TableOfferAdmin";

class Admin extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path="*" exact component={Sidebar}/>
                    <div className="main-panel">
                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <Route path="/admin/services" component={Services}/>
                                    <Route path="/admin/claims" component={Claim}/>
                                    <Route path="/admin/offers" component={TableOfferAdmin}/>
                                    <Route path="/admin/after" component={AfterSales}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </Router>
        );
    }
}

export default Admin;