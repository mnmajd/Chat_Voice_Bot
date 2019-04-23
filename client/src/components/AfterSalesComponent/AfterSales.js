import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddAfterSales from "./AddAfterSales";
import TableAfterSalesAdmin from "./TableAfterSalesAdmin";

class AfterSales extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path="/admin/aftersales/table" component={TableAfterSalesAdmin}/>
                <Route path="/admin/aftersales/add" component={AddAfterSales}/>
            </React.Fragment>
        );
    }
}

export default AfterSales;