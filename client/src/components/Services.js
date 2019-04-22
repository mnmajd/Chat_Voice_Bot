import React, {Component} from "react";

class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                <div className="col-md-4">
                    <div className="card card-product">
                        <div className="card-header card-header-image" data-header-animation="true">
                            <a href="#pablo">
                                <img className="img" src={require('../assets/img/internetService.png')}/>
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
                                <a href="#pablo">Internet Service</a>
                            </h4>
                            <div className="card-description">
                                Description </div>
                        </div>
                        <div className="card-footer">
                            <div className="price">
                                <h4>15dt/month</h4>
                            </div>
                            <div className="stats">
                                <p className="card-category"><i className="material-icons">date</i> 21/04/2019</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-product">
                        <div className="card-header card-header-image" data-header-animation="true">
                            <a href="#pablo">
                                <img className="img" src={require('../assets/img/callService.jpg')}  style={{height:'180px'}} />
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
                                <a href="#pablo">Call Service</a>
                            </h4>
                            <div className="card-description">
                                Description                         </div>
                        </div>
                        <div className="card-footer">
                            <div className="price">
                                <h4>20dt/month</h4>
                            </div>
                            <div className="stats">
                                <p className="card-category"><i className="material-icons">date</i> 18/04/2019</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Services;