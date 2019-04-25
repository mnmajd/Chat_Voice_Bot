import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import TableServiceAdmin from "./TableServiceAdmin";
import AddService from "./AddService";
import DetailsService from "./DetailsService";


class Offer extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path="/admin/services/table" component={TableServiceAdmin}/>
                <Route path="/admin/services/add" component={AddService}/>
                <Route path="/admin/services/details/:idService/:idOffer" component={DetailsService}/>
            </React.Fragment>
        );
    }
}

export default Offer;