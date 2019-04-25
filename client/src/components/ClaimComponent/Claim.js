import React, {Component} from "react";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";

import TableClaimAdmin from "./TableClaimAdmin";
import DetailsClaim from "./DetailsClaim";
import store from "../../store";
import {history} from "../../helpers";
import Provider from "react-redux/es/components/Provider";

class Claim extends Component {
    render() {
        return (
                    <React.Fragment>
                            <Route path="/admin/claims/table" component={TableClaimAdmin}/>
                            <Route path="/admin/claims/details/:idClaim" component={DetailsClaim}/>
                    </React.Fragment>
        );
    }
}

export default Claim;