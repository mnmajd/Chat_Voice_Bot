import React, {Component} from "react";
import {getAllOffers} from "../../store/actions/OfferActions";
import connect from "react-redux/es/connect/connect";

class TableOfferFront extends Component {
    componentWillMount() {
        const {dispatch } = this.props;
        dispatch(getAllOffers())
    }
    render() {
        return (
            <div className="row">
            {this.props.Offers.map(offer => (
            <React.Fragment>
                <div className="col-lg-3 col-md-6">
                    <div className="card card-pricing card-plain">
                        <h6 className="card-category"> {offer.Title}</h6>
                        <div className="card-body">
                            <div className="card-icon">
                                <i className="material-icons">phone_iphone</i>
                            </div>
                            <h3 className="card-title"> {offer.Price}</h3>
                            <p className="card-description"> {offer.Duration}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            ))}
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    const { Offers } = state.offersreducer;
    return {
        Offers
    };
}
export default connect(
    mapStateToProps,
    null
)(TableOfferFront);
