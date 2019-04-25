import React, {Component} from "react";
import {getServiceById} from "../../store/actions/ServiceAction";
import connect from "react-redux/es/connect/connect";
import {getOfferById} from "../../store/actions/OfferActions";


class DetailsService extends Component {
    componentWillMount() {
        const {idService} = this.props.match.params;
        const {idOffer} = this.props.match.params;
        const {dispatch } = this.props;
        dispatch(getServiceById(idService));
        dispatch(getOfferById(idOffer));

    }
    render() {
        return (
            <React.Fragment>
                <React.Fragment>
                    <React.Fragment>
                        <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                            <div className="card card-profile">
                                <div className="card-avatar">
                                    <a href="">
                                        <img className="img" src={require('../../assets/img/service.png')}/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-category "> Title  :{this.props.Service.Title}</h4>
                                    <h6 className="card-title text-gray">Type: {this.props.Service.Type}</h6>
                                    <h6 className="card-title text-gray">Code: {this.props.Service.Code}</h6>
                                    <h6 className="card-title text-gray">Offer: {this.props.Offer.Title}</h6>
                                    <p className="card-description">
                                        Description: {this.props.Service.Description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </React.Fragment>
                </React.Fragment>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) =>{
    const { Service } = state.servicesreducer;
    const { Offer } = state.offersreducer;
    return {
        Service,
        Offer
    };
}
export default connect(
    mapStateToProps,
    null
)(DetailsService);
