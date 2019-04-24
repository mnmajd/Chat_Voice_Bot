import React, {Component} from "react";
import {Link,Route} from "react-router-dom";
import {getAllOffers} from "../../store/actions/OfferActions";
import connect from "react-redux/es/connect/connect";
import AddOffer from "./AddOffer";


class TableOfferAdmin extends Component {
    componentWillMount() {
        const {dispatch } = this.props;
        dispatch(getAllOffers())
    }
    render() {
        return (
            <React.Fragment>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header card-header-rose card-header-icon">
                            <div className="card-icon">
                                <i className="material-icons">assignment</i>
                            </div>
                            <h4 className="card-title">Offers Table</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Type</th>
                                        <th>Duration</th>
                                        <th className="text-right">CodeActivation</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.props.Offers.map(offer => (
                                        <React.Fragment>
                                            <tr>
                                                <td>{offer.Title}</td>
                                                <td>{offer.Type}</td>
                                                <td>{offer.Duration}</td>
                                                <td className="text-right">{offer.CodeActivation}</td>
                                                <td className="td-actions text-right">
                                                    <button type="button" rel="tooltip" className="btn btn-info">
                                                        <Link to={'/admin/offers/details/'+offer._id} style={{color:'white'}} >
                                                        <i className="material-icons">info</i>
                                                        </Link>
                                                    </button>
                                                    <button type="button" rel="tooltip" className="btn btn-success">
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                    <button type="button" rel="tooltip" className="btn btn-danger">
                                                        <i className="material-icons">close</i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
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
)(TableOfferAdmin);
