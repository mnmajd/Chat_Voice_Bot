import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import TableOfferAdmin from "./TableOfferAdmin";
import DetailsOffer from "./DetailsOffer";
import AddOffer from "./AddOffer";


class Offer extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path="/admin/offers/table" component={TableOfferAdmin}/>
                <Route path="/admin/offers/add" component={AddOffer}/>
                <Route path="/admin/offers/details/:idOffer" component={DetailsOffer}/>
            </React.Fragment>
        );
    }
}

export default Offer;