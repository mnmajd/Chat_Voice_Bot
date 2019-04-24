import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import '../assets/css/material-dashboard.css'
import '../assets/img/apple-icon.png';
import  '../assets/img/favicon.png';
import '../assets/assets-for-demo/demo.css';
import Sidebar from "./Sidebar";
import Services from "./Services";
import Claim from "./Claim";
import Offers from "./Offers";
import Chat from "./Chat";
import AfterSales from "./AfterSales";
import Dashboard from "./Dashboard";

class Admin extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path="*" exact component={Sidebar} />
                    <Route path="/admin/services"  component={Services} />
                    <Route path="/admin/claims"   component={Claim} />
                    <Route path="/admin/offers"   component={Offers} />
                    <Route path="/admin/after"   component={AfterSales} />
                    <Route path="/admin/dash"   component={Dashboard} />
                </React.Fragment>
            </Router>
        );
    }
}

export default Admin;