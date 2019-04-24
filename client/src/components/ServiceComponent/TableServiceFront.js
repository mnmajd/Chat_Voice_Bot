import React, {Component} from "react";
import {getAllServices} from "../../store/actions/ServiceAction";
import connect from "react-redux/es/connect/connect";

class TableServiceFront extends Component {
    componentWillMount() {
        const {dispatch } = this.props;
        dispatch(getAllServices())
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    {this.props.Services.map(service => (
                        <React.Fragment>
                    <div className="col-md-4">
                        <div className="card card-product">
                            <div className="card-header card-header-image" data-header-animation="true">
                                <a href="#pablo">
                                    <img className="img" src={require('../../assets/img/internetService.png')}/>
                                </a>
                            </div>
                            <div className="card-body">
                                <div className="card-actions text-center">
                                    <button type="button" className="btn btn-danger btn-link fix-broken-card">
                                        <i className="material-icons">build</i> Fix Header!
                                    </button>
                                    <button type="button" className="btn btn-default btn-link" rel="tooltip" data-placement="bottom" title="View">
                                        <i className="material-icons">art_track</i>
                                    </button>
                                    <button type="button" className="btn btn-success btn-link" rel="tooltip" data-placement="bottom" title="Edit">
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button type="button" className="btn btn-danger btn-link" rel="tooltip" data-placement="bottom" title="Remove">
                                        <i className="material-icons">close</i>
                                    </button>
                                </div>
                                <h4 className="card-title">
                                    <a href="#pablo">{service.Title}</a>
                                </h4>
                                <div className="card-description">
                                    {service.Description} </div>
                            </div>
                            <div className="card-footer">
                                <div className="price">
                                    <h4>{service.Type}</h4>
                                </div>
                                <div className="stats">
                                    <p className="card-category"><i className="material-icons">vpn_key</i>{service.Description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        </React.Fragment>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) =>{
    const { Services } = state.servicesreducer;
    return {
        Services
    };
}
export default connect(
    mapStateToProps,
    null
)(TableServiceFront);
