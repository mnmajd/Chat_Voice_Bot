import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import '../assets/css/material-dashboard.css'
import '../assets/img/apple-icon.png';
import '../assets/img/favicon.png';
import '../assets/assets-for-demo/demo.css';
import Sidebar from "./Sidebar";
import AfterSales from "./AfterSalesComponent/AfterSales";
import Claim from "./ClaimComponent/Claim";
import Offer from "./OfferComponent/Offer";
import Services from "./ServiceComponent/Service";

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
                                    <Route path="/admin/offers" component={Offer}/>
                                    <Route path="/admin/aftersales" component={AfterSales}/>
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