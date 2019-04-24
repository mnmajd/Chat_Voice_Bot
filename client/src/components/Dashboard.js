import React, {Component} from "react";
import OfferStat from "./OfferStat";
import ClaimStat from "./ClaimStat";
import SalesStat from "./SalesStat";
import UserStat from "./UserStat";
import ServicesStat from "./ServicesStat";

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>


                <div className="main-panel">
                    <div className="header text-center">
                        <h3 className="title">SFM Admin Statistic Panel</h3>
                        <p className="category">With this Tab Admin can
                            <a target="_blank" href="https://gionkunz.github.io/chartist-js/">Have </a>. A global View
                            <a href="" target="_blank">Of the system</a>
                        </p>
                    </div>
                    <div className="content ">

                        <div className="container-fluid">
                            <div className="row">
                               <OfferStat/>
                                <ClaimStat/>
                                <SalesStat/>
                                <UserStat/>
                                <ServicesStat/>
                                </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;