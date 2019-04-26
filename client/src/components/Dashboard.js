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
                <div className="col-md-4 col-sm-6 ml-auto mr-auto">

                 <h3 className="title">SFM Admin Statistic Panel</h3>
                </div>
                <div className="row">


                    <UserStat/>
                    <OfferStat/>

                </div>

            </React.Fragment>
        );
    }
}

export default Dashboard;