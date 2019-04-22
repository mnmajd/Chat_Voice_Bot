import React, {Component} from "react";
import TableClaimFront from "./ClaimComponent/TableClaimFront";
import Services from "./Services";
import Offers from "./Offers";
import {Link} from "react-router-dom";

class AboutMe extends Component {
    render() {
        return (
            <React.Fragment>
                    <ul className="nav nav-pills nav-pills-warning nav-pills-icons justify-content-center" role="tablist" stylle={{marginTop:'50px'}}>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#link7" role="tablist" style={{color:'white'}}>
                                <i className="material-icons">shopping_cart</i> Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#link8" role="tablist" style={{color:'white'}}>
                                <i className="material-icons">local_offer</i> Offers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#link9" role="tablist" style={{color:'white'}}>
                                <i className="material-icons">warning</i> Claims
                            </a>
                        </li>
                    </ul>
                <div className="card">
                    <div className="tab-content tab-space tab-subcategories">

                        <div className="tab-pane" id="link7">
                            <Services/>
                        </div>


                        <div className="tab-pane active" id="link8">
                            <Offers/>
                        </div>



                        <div className="tab-pane" id="link9">
                                <div className="row" style={{marginLeft:'950px'}}>
                                    <button className="btn btn-primary btn-round">
                                        <i className="material-icons">send</i> Send Claim
                                    </button>
                                </div>
                            <TableClaimFront/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AboutMe;