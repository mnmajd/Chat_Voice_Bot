import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import '../assets/css/material-dashboard.css'
import '../assets/img/apple-icon.png';
import '../assets/img/favicon.png';
import '../assets/assets-for-demo/demo.css';
import Sidebar from "./Sidebar";
import AfterSales from "./AfterSalesComponent/AfterSales";
import Claim from "./ClaimComponent/Claim";
import Offer from "./OfferComponent/Offer";
import Services from "./ServiceComponent/Service";
import Provider from "react-redux/es/components/Provider";
import store from "../store";
import {history} from "../helpers";
import History from "./History";
import Dashboard from "./Dashboard";

class Admin extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <React.Fragment>
                        <Route path="*" exact component={Sidebar}/>
                        <div className="main-panel">
                            <div className="content">
                                <div className="container-fluid">
                                    <div className="row">
                                        <Switch>
                                            <Route path="/admin/services" component={Services}/>
                                            <Route path="/admin/claims" component={Claim}/>
                                            <Route path="/admin/offers" component={Offer}/>
                                            <Route path="/admin/aftersales" component={AfterSales}/>
                                            <Route path="/admin/history" component={History}/>
                                            <Route path="/admin"  exact component={Dashboard}/>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}

export default Admin;