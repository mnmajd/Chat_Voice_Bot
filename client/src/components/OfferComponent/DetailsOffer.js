import React, {Component} from "react";
import {getOfferById} from "../../store/actions/OfferActions";
import connect from "react-redux/es/connect/connect";

class DetailsOffer extends Component {
    componentWillMount() {
        const {idOffer} = this.props.match.params;
        const {dispatch } = this.props;
        dispatch(getOfferById(idOffer));
    }
    render() {
        return (
            <React.Fragment>
                <React.Fragment>
                    <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                        <div className="card card-profile">
                            <div className="card-avatar">
                                <a href="">
                                    <img className="img" src={require('../../assets/img/offer.png')}/>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-category "> Title  :{this.props.Offer.Title}</h4>
                                <h6 className="card-title text-gray">Type: {this.props.Offer.Type}</h6>
                                <h6 className="card-title text-gray">Duration: {this.props.Offer.Duration}</h6>
                                <h6 className="card-title text-gray">CodeActivation: {this.props.Offer.CodeActivation}</h6>
                                <p className="card-description">
                                    Price: {this.props.Offer.Price}
                                </p>
                            </div>

                        </div>
                    </div>
                </React.Fragment>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>{
    const { Offer } = state.offersreducer;
    return {
        Offer
    };
}
export default connect(
    mapStateToProps,
    null
)(DetailsOffer);